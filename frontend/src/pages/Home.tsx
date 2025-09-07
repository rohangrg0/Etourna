import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; // import Footer
import Features from "../components/Features";
import GamesSection from "../components/GameSection";

const Home: React.FC = () => {
  const handleNavigation = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-white">
      {/* Navbar */}
      <Navbar onNavigate={handleNavigation} />

      {/* Main Content */}
      
        <main className="flex-1">
      <HeroSection />

        {/* GameSection */}
        <GamesSection/>

         {/* Features */}
        <Features />

        {/* About */}
        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl text-center">
            ETourna is built for competitive communities who want a smooth, modern way to manage events.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-[#151515] px-8">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-lg text-gray-300 max-w-xl text-center mb-6">
            Have questions or feedback? Get in touch with us.
          </p>
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-[#0f0f0f] border border-gray-700 focus:border-[#C62300] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-[#0f0f0f] border border-gray-700 focus:border-[#C62300] outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded bg-[#0f0f0f] border border-gray-700 focus:border-[#C62300] outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#C62300] to-[#500073] hover:from-[#C62300] hover:to-[#C62300] text-white font-bold py-2 px-6 rounded transition-colors duration-500 ease-in-out w-full"
            >
              Send
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
