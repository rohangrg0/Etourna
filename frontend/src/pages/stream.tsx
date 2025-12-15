import React from "react";

interface FootballOverlayProps {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  time: string;        // Example: "23'"
  status: string;      // LIVE | HT | FT | Upcoming
  logoA?: string;      // URL for team A logo
  logoB?: string;      // URL for team B logo
}

const FootballOverlay: React.FC<FootballOverlayProps> = ({
  teamA,
  teamB,
  scoreA,
  scoreB,
  time,
  status,
  logoA,
  logoB
}) => {
  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center">
      <div className="bg-black/60 backdrop-blur-xl px-10 py-6 text-white rounded-2xl shadow-xl flex items-center gap-10 relative">

        {/* Match Status */}
        <div className="absolute top-[-35px] bg-red-600 text-white px-5 py-1 rounded-full text-sm font-semibold">
          {status}
        </div>

        {/* Team A */}
        <div className="flex flex-col items-center text-center">
          {logoA && <img src={logoA} className="w-14 h-14 object-contain mb-1" />}
          <span className="text-xl font-semibold">{teamA}</span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-4 text-5xl font-bold">
          <span>{scoreA}</span>
          <span className="text-3xl">-</span>
          <span>{scoreB}</span>
        </div>

        {/* Team B */}
        <div className="flex flex-col items-center text-center">
          {logoB && <img src={logoB} className="w-14 h-14 object-contain mb-1" />}
          <span className="text-xl font-semibold">{teamB}</span>
        </div>

        {/* Match Time */}
        <div className="absolute bottom-[-35px] bg-white/20 px-4 py-1 text-sm rounded-full">
          ⏱ {time}
        </div>

      </div>
    </div>
  );
};

export default FootballOverlay;
