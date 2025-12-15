// Footer.tsx
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-cyan-500 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Zone-O-C</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Logo + Socials */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Zone-O-C</h2>
          <div className="flex space-x-5 text-2xl">
            <a href="#" className="text-cyan-500 hover:text-cyan-300"><FaFacebook /></a>
            <a href="#" className="text-cyan-500 hover:text-cyan-300"><FaInstagram /></a>
            <a href="#" className="text-cyan-500 hover:text-cyan-300"><FaTiktok /></a>
            <a href="#" className="text-cyan-500 hover:text-cyan-300"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>Phone: +977 9812345678</p>
          <p>Address: Kathmandu, Nepal</p>
          <p>Email: <a href="mailto:support@zoneoc.com" className="text-cyan-300 hover:underline">support@zoneoc.com</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-600">
        © Zone-O-C {new Date().getFullYear()} — All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
