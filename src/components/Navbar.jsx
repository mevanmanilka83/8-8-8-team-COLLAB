import logo from "../assets/logo.png";
import { navItems } from "../data";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[49]"
          onClick={toggleMenu}
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-[50] bg-white border-b border-neutral-700/80">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-10 mr-2 sm:h-12 sm:w-12"
              />
            </div>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-black hover:text-gray-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center space-x-6">
              <a
                href="#"
                className="py-2 px-3 border border-neutral-300 rounded-md hover:border-neutral-600 transition-colors duration-200"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-black to-gray-900 py-2 px-3 rounded-md text-white hover:opacity-90 transition-opacity duration-200"
              >
                Sign Up
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div
            className={`lg:hidden fixed inset-0 top-16 z-[51] bg-white transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-[calc(100vh-4rem)] overflow-y-auto p-6">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-2 text-lg hover:text-gray-600"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-4">
                <a
                  href="#"
                  className="block w-full py-2.5 px-4 rounded-lg border border-gray-200 text-center hover:border-gray-300 transition-colors"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="block w-full py-2.5 px-4 rounded-lg bg-black text-white text-center hover:bg-gray-800 transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
