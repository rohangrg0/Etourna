import React, { useState, useEffect } from 'react';
import etourn from '../assets/etourn.png';

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
            ? "max-w-5xl w-full bg-black/60 backdrop-blur-md shadow-md py-2 px-6"
            : "max-w-7xl w-full bg-transparent py-4 px-6"
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src={etourn}
            alt="ETourna Logo"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-8" : "h-10"
            }`}
          />
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavClick('dashboard'); }}
            className="text-gray-200 font-medium hover:text-red-400 transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="#features" 
            onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
            className="text-gray-200 font-medium hover:text-red-400 transition-colors"
          >
            Features
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            className="text-gray-200 font-medium hover:text-red-400 transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className="text-gray-200 font-medium hover:text-red-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <a 
            href="/login" 
            onClick={(e) => { e.preventDefault(); handleNavClick('login'); }}
            className="text-gray-200 font-medium hover:text-red-400 transition-colors"
          >
            Login
          </a>
          <a
            href="#register"
            className="border border-gray-200 text-gray-200 font-semibold py-1 px-4 rounded-full hover:bg-red-400 hover:border-red-400 hover:text-black transition-all"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
