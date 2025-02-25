import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container relative px-4 mx-auto text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            {/* <span className="text-xl tracking-tight"></span> */}
          </div>
          <ul className=" hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-primary-500 text-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-black to-gray-900 py-2 px-3 rounded-md
 text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
