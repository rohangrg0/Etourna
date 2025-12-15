
import React, { useState, useEffect } from "react";
import ParticlesBG from "./ParticlesBG";
import Login from "../components/LoginComp";
import Register from "../components/RegisterComp";

const HeroSection: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loginFade, setLoginFade] = useState(false);
  const [registerFade, setRegisterFade] = useState(false);

  useEffect(() => {
    if (isLoginOpen) {
      setTimeout(() => setLoginFade(true), 10);
    }
  }, [isLoginOpen]);

  useEffect(() => {
    if (isRegisterOpen) {
      setTimeout(() => setRegisterFade(true), 10);
    }
  }, [isRegisterOpen]);

  const closeLoginModal = () => {
    setLoginFade(false);
    setTimeout(() => setIsLoginOpen(false), 300);
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
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-10 md:px-20 text-center">
        <h1 className="text-[#B17457] text-4xl md:text-6xl font-bold mb-4">
          WELCOME TO ZONE-O-C
        </h1>
        <p className="text-[#4A4947] text-lg md:text-2xl mb-6">
          Coming up with all your favourite tournaments updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-[#B17457] text-[#FAF7F0] font-bold py-2 px-6 rounded inline-block text-center"
          >
            Log In
          </button>

          <button
            onClick={() => setIsRegisterOpen(true)}
            className="border border-[#B17457] text-[#B17457] font-bold py-2 px-6 rounded hover:bg-[#B17457] hover:text-[#FAF7F0] transition"
          >
            Get Started
          </button>
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
