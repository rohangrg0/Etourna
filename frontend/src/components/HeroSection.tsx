import React from "react";
// import { motion } from "framer-motion";
import ParticlesBG from "./ParticlesBG"; // same folder
import controllerImg from "../assets/Console.png"; // make sure this matches your file name

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Background Particles */}
      <ParticlesBG />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-10 md:px-20 ml-69">
        
        {/* Text Section */}
        <div className="flex flex-col items-start max-w-xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            WELCOME TO ETOURNA
          </h1>
          <p className="text-white/80 text-lg md:text-2xl mb-6">
            Coming up with all your favourite tournaments updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#bd2208] text-black font-bold py-2 px-6 rounded">
              Log In
            </button>
            <button className="border border-[#bd2208] text-[#bd2208] font-bold py-2 px-6 rounded hover:bg-[#bd2208] hover:text-white transition">
              Explore Games
            </button>
          </div>
        </div>

        {/* Controller Image */}
        {/* <motion.div
          className="mt-10 md:mt-0 md:mr-40 w-80 md:w-[40rem] flex justify-center items-center"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={controllerImg}
            alt="Controller"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div> */}

        <div
          className="mt-10 md:mt-0 md:mr-40 w-80 md:w-[40rem] flex justify-center items-center"
        >
          <img
            src={controllerImg}
            alt="Controller"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
