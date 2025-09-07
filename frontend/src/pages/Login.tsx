import React from "react";
import Login from "../components/LoginComp";
import Navbar from "../components/Navbar"; // optional if you want navbar
import Footer from "../components/Footer"; // optional if you want footer

const LoginPage: React.FC = () => {
  return (
    <div className="bg-[#151515] min-h-screen flex flex-col">
      {/* Navbar (optional) */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <Login />
      </div>

      {/* Footer (optional) */}
      <Footer />
    </div>
  );
};

export default LoginPage;
