import React, { useState } from "react";
import heroImage from "../assets/hero.jpeg"; // Replace with your uploaded image

const slides = [
  {
    id: 1,
    title: "Save up to $14,000 if you lease by 9/15",
    subtitle: "Lease by September 15 and get up to $14,000 in lease offers on select new R1.",
    cta1: "Shop R1S",
    cta2: "Shop R1T",
    image: heroImage,
  },
  // You can add more slides here
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-10 md:px-20">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 max-w-xl">
              {slide.title}
            </h1>
            <p className="text-white text-lg md:text-2xl mb-6 max-w-lg">
              {slide.subtitle}
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black font-bold py-2 px-6 rounded">
                {slide.cta1}
              </button>
              <button className="border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-black transition">
                {slide.cta2}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-8 rounded-full cursor-pointer transition-all ${
              idx === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
