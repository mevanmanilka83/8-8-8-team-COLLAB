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
    <nav className="sticky top-0 z-[100] py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
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
            className="lg:hidden z-[110] relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[101]"
              onClick={toggleMenu}
            />
            <div className="fixed inset-y-0 right-0 w-[280px] bg-white shadow-xl z-[102] p-6 transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                <ul className="mt-16 space-y-4">
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
                <div className="mt-auto space-y-4">
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
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
