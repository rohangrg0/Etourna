import React, { useState, useEffect } from "react";
import ParticlesBG from "./ParticlesBG";
import controllerImg from "../assets/zoc.png";
import Login from "../components/LoginComp";

const HeroSection: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle fade-in when opening modal
  useEffect(() => {
    if (isLoginOpen) {
      setShowModal(true);
    }
  }, [isLoginOpen]);

  const closeModal = () => {
    // fade-out first
    setShowModal(false);
    // then hide modal after animation duration
    setTimeout(() => setIsLoginOpen(false), 300);
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

            <button className="border border-[#00BFFF] text-[#00BFFF] font-bold py-2 px-6 rounded hover:bg-[#00BFFF] hover:text-black transition">
              Explore Games
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

      {/* Login Modal with Fade-in/Fade-out */}
      {isLoginOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-lg mx-4 transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
