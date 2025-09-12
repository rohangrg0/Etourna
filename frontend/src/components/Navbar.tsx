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
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => handleNavClick("home")}
            className="text-white hover:text-[#00BFFF] transition"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("tournaments")}
            className="text-white hover:text-[#00BFFF] transition"
          >
            Tournaments
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-white hover:text-[#00BFFF] transition"
          >
            About
          </button>
        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here later */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
