import React from "react";
import pstn from "../assets/pstn.svg";

const Navbar: React.FC = () => {
  return (
     <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-8 py-4 flex justify-between items-center">
      {/* Logo */}
         <a href="#">
    <img src={pstn} alt="Logo" className="h-20 w-auto" />
  </a>
      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li>
          <a href="#" className="text-white hover:text-blue-600 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-blue-600 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className=" text-white hover:text-blue-600 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-blue-600 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
