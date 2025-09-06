import React from 'react';
import etourn from '../assets/etourn.png';


interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Navbar: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <header className="bg-transparent px-8 py-4 flex justify-between items-center border-b-2 border-[#C62300]">
     <div className="flex items-center w-full">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src={etourn}
            alt="ETourna Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Spacer - pushes nav to the right */}
        <div className="flex-grow"></div>
        
        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavClick('dashboard'); }}
            className="text-white font-bold hover:text-[#C62300] transition-colors duration-300 ease-in-out"
            >
            Dashboard
          </a>
          <a 
            href="#features" 
            onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
            className="text-white font-bold hover:text-[#C62300] transition-colors duration-300 ease-in-out"
            >
            Features
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            className="text-white font-bold hover:text-[#C62300] transition-colors duration-300 ease-in-out"
            >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className="text-white font-bold hover:text-[#C62300] transition-colors duration-300 ease-in-out"
            >
            Contact
          </a>
          <a 
            href="/login" 
            onClick={(e) => { e.preventDefault(); handleNavClick('login'); }}
            className="bg-gradient-to-r from-[#C62300] to-[#500073] 
            hover:from-[#C62300] hover:to-[#C62300] 
            text-white font-bold py-1 px-4 rounded 
            transition-colors duration-500 ease-in-out">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;