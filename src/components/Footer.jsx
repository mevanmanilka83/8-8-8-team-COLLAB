import { resourcesLinks, platformLinks, communityLinks } from "../data";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <nav>
              <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-black hover:text-slate-800"
                      aria-label={`Navigate to ${link.text}`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <nav>
              <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-black hover:text-slate-800"
                      aria-label={`Navigate to ${link.text}`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <nav>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-black hover:text-slate-800"
                      aria-label={`Navigate to ${link.text}`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
