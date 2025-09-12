import React, { useState, useEffect } from "react";

// Import game images from assets
import Dota from "../assets/games/Dota2.jpg";
import Efootball from "../assets/games/efootball.jpg";
import FC26 from "../assets/games/Fc26.jpg";
import Fortnite from "../assets/games/fortnite.jpg";
import Lol from "../assets/games/Lol.jpg";
import Mlbb from "../assets/games/mlbb.jpg";
import Pubgm from "../assets/games/pubgm.jpg";
import Valorant from "../assets/games/valorant.jpg";
import Val from "../assets/games/val.jpeg";
import Ef from "../assets/games/ef.jpeg";
import Fc from "../assets/games/fc.jpeg";
import Loll from "../assets/games/loll.jpeg";
import Mlb from "../assets/games/mlb.jpeg";
import Fort from "../assets/games/fort.jpg";
import Dot from "../assets/games/Dot.jpeg";
import Pg from "../assets/games/pg.jpeg";




const games = [
  { title: "Dota 2", description: "Epic 5v5 MOBA action.", image: Dota, backImage: Dot, link: "/dota2" },
  { title: "Efootball", description: "Next-gen football simulation.", image: Efootball, backImage: Ef, link: "/efootball" },
  { title: "FC 26", description: "Ultimate football gaming experience.", image: FC26, backImage: Fc, link: "/fc26" },
  { title: "Fortnite", description: "Battle royale phenomenon.", image: Fortnite, backImage: Fort, link: "/fortnite" },
  { title: "League of Legends", description: "Strategic MOBA gameplay.", image: Lol, backImage: Loll, link: "/lol" },
  { title: "Mobile Legends", description: "Fast-paced 5v5 MOBA.", image: Mlbb, backImage: Mlb, link: "/mlbb" },
  { title: "PUBG Mobile", description: "Classic survival battle royale.", image: Pubgm, backImage: Pg, link: "/pubgm" },
  { title: "Valorant", description: "Tactical FPS with agents.", image: Valorant, backImage: Val, link: "/valorant" },
];

const GamesSection: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [scrollX, setScrollX] = useState(0);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY / 3); // adjust scroll speed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="games"
       className="min-h-screen flex flex-col justify-center items-center bg-[#0A0A0F] px-8 py-16 overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-12">Games</h2>

      {/* Top row: Right → Left */}
      <div
        className="flex gap-10 transition-transform duration-300 mb-16"
        style={{
          transform: `translateX(calc(50vw - ${scrollX}px))`,
        }}
      >
        {games.map((game, index) => {
          const isFlipped = flippedIndex === index;
          return (
            <div
              key={`top-${index}`}
              className="relative w-64 h-80 cursor-pointer perspective-[1200px] flex-shrink-0"
              onClick={() => handleFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-gpu ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg backface-hidden">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white">{game.title}</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg rotate-y-180 backface-hidden">
                  <img
                    src={game.backImage}
                    alt={`${game.title} back`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6">
                    <h3 className="text-xl font-bold mb-3">{game.title}</h3>
                    <p className="text-gray-300 mb-4">{game.description}</p>
                    <a
                      href={game.link}
                      className="bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] hover:from-[#1E90FF] hover:to-[#1E90FF] text-white font-bold py-2 px-6 rounded transition-colors duration-500 ease-in-out"
                    >
                      Go Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom row: Left → Right */}
      <div
        className="flex gap-10 transition-transform duration-300"
        style={{
          transform: `translateX(calc(-50vw + ${scrollX}px))`,
        }}
      >
        {games.map((game, index) => {
          const isFlipped = flippedIndex === index + 100; // unique index for bottom row
          return (
            <div
              key={`bottom-${index}`}
              className="relative w-64 h-80 cursor-pointer perspective-[1200px] flex-shrink-0"
              onClick={() => handleFlip(index + 100)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-gpu ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg backface-hidden">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white">{game.title}</h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg rotate-y-180 backface-hidden">
                  <img
                    src={game.backImage}
                    alt={`${game.title} back`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6">
                    <h3 className="text-xl font-bold mb-3">{game.title}</h3>
                    <p className="text-gray-300 mb-4">{game.description}</p>
                    <a
                      href={game.link}
                      className="bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] hover:from-[#1E90FF] hover:to-[#1E90FF] text-white font-bold py-2 px-6 rounded transition-colors duration-500 ease-in-out"
                      >
                      Go Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GamesSection;