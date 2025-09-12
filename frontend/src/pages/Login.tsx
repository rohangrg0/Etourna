import React from "react";
import Login from "../components/LoginComp";
import Navbar from "../components/Navbar"; // optional
import Footer from "../components/Footer"; // optional
import MSC from "../assets/msc.png"; // main image

const LoginPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={MSC}
              alt="MSC"
              className="w-[600px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2">
            <Login />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
