import React, { useState, useEffect } from 'react';
import zoc from '../assets/zoc.svg';
import { Link } from "react-router-dom";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Navbar: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "mt-2" : "mt-0"
      }`}
    >
      <div
        className={`transition-all duration-500 rounded-2xl ${
          scrolled
            ? "max-w-5xl w-full bg-black/70 backdrop-blur-md shadow-md py-2 px-6"
            : "max-w-7xl w-full bg-transparent py-4 px-6"
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={zoc}
            alt="Zoc Logo"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-8" : "h-10"
            }`}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link 
            to = "/AdminDb"
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            Dashboard
          </Link>
          <a 
            href="#features" 
            onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            Features
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            About
          </a>
          <a 
            href="../pages/Login.tsx" 
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
  <Link
    to="/login"
    className="text-gray-200 font-medium hover:text-[#1E90FF] transition-colors"
  >
    Login
  </Link>
          <Link
            to="/register"
            className="border border-gray-200 text-gray-200 font-semibold py-1 px-4 rounded-full hover:bg-[#1E90FF] hover:border-[#1E90FF] hover:text-white transition-all"
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
