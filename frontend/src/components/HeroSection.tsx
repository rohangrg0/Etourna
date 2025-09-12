import React, { useState, useEffect } from "react";
import ParticlesBG from "./ParticlesBG";
import controllerImg from "../assets/zoc.png";
import Login from "../components/LoginComp";
import Register from "../components/RegisterComp";

const HeroSection: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loginFade, setLoginFade] = useState(false);
  const [registerFade, setRegisterFade] = useState(false);

  // Open Login modal with fade-in
  useEffect(() => {
    if (isLoginOpen) {
      setTimeout(() => setLoginFade(true), 10); // small delay for fade-in
    }
  }, [isLoginOpen]);

  // Open Register modal with fade-in
  useEffect(() => {
    if (isRegisterOpen) {
      setTimeout(() => setRegisterFade(true), 10);
    }
  }, [isRegisterOpen]);

  const closeLoginModal = () => {
    setLoginFade(false); // fade-out
    setTimeout(() => setIsLoginOpen(false), 300); // then hide modal
  };

  const closeRegisterModal = () => {
    setRegisterFade(false);
    setTimeout(() => setIsRegisterOpen(false), 300);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Background Particles */}
      <ParticlesBG />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-10 md:px-20">
        {/* Text Section */}
        <div className="flex flex-col items-start max-w-xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            WELCOME TO ZONE-O-C
          </h1>
          <p className="text-white/80 text-lg md:text-2xl mb-6">
            Coming up with all your favourite tournaments updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Log In - Opens Popup */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="bg-[#00BFFF] text-black font-bold py-2 px-6 rounded inline-block text-center"
            >
              Log In
            </button>

            <button
              onClick={() => setIsRegisterOpen(true)}
              className="border border-[#00BFFF] text-[#00BFFF] font-bold py-2 px-6 rounded hover:bg-[#00BFFF] hover:text-black transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Controller Image */}
        <div className="mt-10 md:mt-0 md:mr-40 w-80 md:w-[40rem] flex justify-center items-center">
          <img
            src={controllerImg}
            alt="Controller"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            loginFade ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLoginModal}
        >
          <div
            className={`relative w-full max-w-lg mx-4 transition-transform duration-300 ${
              loginFade ? "scale-100" : "scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLoginModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            registerFade ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeRegisterModal}
        >
          <div
            className={`relative w-full max-w-lg mx-4 transition-transform duration-300 ${
              registerFade ? "scale-100" : "scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeRegisterModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
