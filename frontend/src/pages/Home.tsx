import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; // import Footer
import Features from "../components/Features";
import GamesSection from "../components/GameSection";
import Subscription from "../components/Subscription";

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

        {/* Subscription */}
        <Subscription />

        {/* Contact */}
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
