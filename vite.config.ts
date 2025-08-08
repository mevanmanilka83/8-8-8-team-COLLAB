import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';

// Defense-in-depth against several known dev-server bypass vectors
function securityHardeningPlugin() {
  const dangerousQueryParams = new Set(['raw', 'inline', 'import', 'url']);
  const deniedNamePatterns = [
    /^\.env(\..+)?$/i,
    /^\.git($|\/)/,
    /^\.ssh($|\/)/,
    /^\.hg($|\/)/,
    /^\.svn($|\/)/,
    /^\.npmrc$/i,
    /^\.yarnrc$/i,
    /^\.pnp\..*$/i,
    /^\.DS_Store$/
  ];
  const deniedExtPatterns = [/\.(pem|key|crt)$/i];

  function isDeniedRelativePath(relativePathFromRoot: string): boolean {
    const normalized = relativePathFromRoot.replace(/\\/g, '/');
    const segments = normalized.split('/');

    // Block dotfile segments and traversal
    if (segments.some(seg => seg === '' || seg === '.' || seg === '..' || (seg.startsWith('.') && seg !== '.vite'))) {
      return true;
    }

    if (
      deniedNamePatterns.some(rx => rx.test(normalized)) ||
      deniedExtPatterns.some(rx => rx.test(normalized))
    ) {
      return true;
    }

    return false;
  }

  return {
    name: 'security-hardening',
    enforce: 'pre' as const,

    // Guard resolve for query-based virtual loaders like ?raw, ?inline, ?import, ?url
    resolveId(id: string, importer?: string) {
      const [rawPath, rawQuery] = id.split('?');
      if (!rawQuery) return null;

      const params = new URLSearchParams(rawQuery);
      const hasDangerous = [...dangerousQueryParams].some(q => params.has(q));
      if (!hasDangerous) return null;

      // Ignore virtual and Vite-internal ids
      if (id.startsWith('\0') || rawPath.startsWith('/@')) return null;

      const root = process.cwd();
      const baseDir = importer ? path.dirname(importer) : root;
      const absPath = rawPath.startsWith('/') ? path.join(root, rawPath) : path.resolve(baseDir, rawPath);
      const normalized = path.normalize(absPath);
      const relativeFromRoot = path.relative(root, normalized);
      const insideRoot = !relativeFromRoot.startsWith('..') && !path.isAbsolute(relativeFromRoot);

      if (!insideRoot || isDeniedRelativePath(relativeFromRoot)) {
        throw new Error(`Blocked dangerous query import: ${id}`);
      }

      // If file is a symlink, resolve and re-check it is inside root
      try {
        const real = fs.realpathSync(normalized);
        const relReal = path.relative(root, real);
        const insideReal = !relReal.startsWith('..') && !path.isAbsolute(relReal);
        if (!insideReal || isDeniedRelativePath(relReal)) {
          throw new Error(`Blocked symlinked query import: ${id}`);
        }
      } catch {
        // ignore if not exists yet; Vite will handle missing
      }

      return null;
    },

    // HTTP-level guard for dev server requests, including invalid/odd request-target forms
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        try {
          const rawUrl = req.url || '/';
          // Normalize url; if absolute-form or invalid, new URL handles it
          const u = new URL(rawUrl, 'http://localhost');
          const pathname = u.pathname;

          // Normalize path segments to detect '/.' and traversal attempts
          const segments = pathname.split('/');
          const hasHiddenOrTraversal = segments.some(seg => seg === '' || seg === '.' || seg === '..' || (seg.startsWith('.') && seg !== '.vite'));

          const isAtFs = pathname.startsWith('/@fs/');
          if (hasHiddenOrTraversal) {
            res.statusCode = 404;
            res.end();
            return;
          }

          if (isAtFs) {
            const root = server.config.root || process.cwd();
            // Decode after splitting to avoid collapsing '../'
            const afterFs = pathname.slice('/@fs/'.length);
            let absCandidate: string;
            try {
              absCandidate = path.normalize(decodeURIComponent(afterFs));
            } catch {
              res.statusCode = 404;
              res.end();
              return;
            }
            // Ensure absolute path
            if (!path.isAbsolute(absCandidate)) {
              absCandidate = '/' + absCandidate;
            }
            const rel = path.relative(root, absCandidate);
            const inside = !rel.startsWith('..') && !path.isAbsolute(rel);
            if (!inside || isDeniedRelativePath(rel)) {
              res.statusCode = 404;
              res.end();
              return;
            }
          }
        } catch {
          res.statusCode = 404;
          res.end();
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(({ command }) => ({
  plugins: [react(), securityHardeningPlugin()],
  server: {
    host: '127.0.0.1',
    strictPort: true,
    cors: false,
    fs: {
      strict: true,
      allow: [process.cwd()],
      deny: [
        '**/.env',
        '**/.env.*',
        '**/.git/**',
        '**/.ssh/**',
        '**/.hg/**',
        '**/.svn/**',
        '**/*.pem',
        '**/*.key',
        '**/*.crt',
        '**/.npmrc',
        '**/.yarnrc',
        '**/.pnp.*',
        '**/.DS_Store'
      ]
    }
  },
  // Also harden preview server just in case
  preview: {
    host: '127.0.0.1',
    strictPort: true
  },
}));
