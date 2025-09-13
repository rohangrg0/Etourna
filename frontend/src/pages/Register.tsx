// RegisterPage.tsx
import React from "react";
import RegisterComp from "../components/RegisterComp";
import MSC from "../assets/msc.png";  // replace with your PNG path
import Navbar from "../components/Navbar"; // optional
import Footer from "../components/Footer"; // optional

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

    <div className="flex-1 flex items-center justify-center px-6">
      {/* Left Side: Glowing Image */}
      <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={MSC}
              alt="MSC"
              className="w-[600px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

      {/* Right Side: Register Component */}
      <div className="md:w-1/2 flex justify-center items-center p-10">
        <RegisterComp />
      </div>
    
    </div>
    <Footer/>
    </div>
  );
};

export default RegisterPage;