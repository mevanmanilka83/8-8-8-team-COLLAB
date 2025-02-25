import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
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

          <div className="hidden lg:flex justify-center space-x-10 items-center">
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
          <div className="lg:hidden flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-black"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 top-16 z-20 bg-white w-full p-6 flex flex-col justify-start items-center lg:hidden">
            <ul className="w-full text-center">
              {navItems.map((item, index) => (
                <li key={index} className="my-2">
                  <a
                    href={item.href}
                    className="block py-3 text-lg hover:text-gray-600 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col space-y-4 w-full max-w-xs">
              <a
                href="#"
                className="py-2 px-3 border border-neutral-300 rounded-md text-center hover:border-neutral-600 transition-colors duration-200"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-black to-gray-900 py-2 px-3 rounded-md text-white text-center hover:opacity-90 transition-opacity duration-200"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
