import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#00BFFF] py-4 text-center text-gray-400">
      © {new Date().getFullYear()} ZONE-O-C. All rights reserved.
    </footer>
  );
};

export default Footer;
