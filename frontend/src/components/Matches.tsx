import React from "react";

interface Match {
  team1: string;
  team2: string;
  score: string;
  result: string;
}

const matches: Match[] = [
  { team1: "Team Baun", team2: "Mog", score: "13-0", result: "WIN" },
  { team1: "Team Baun", team2: "Kala Kirmada", score: "13-0", result: "WIN" },
];

const Matches: React.FC = () => {
  return (
    <section className="bg-[#11121A] p-6 rounded-lg border border-cyan-500">
      <h2 className="text-xl font-bold mb-4 text-[#00FFFF]">Matches Overview</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="text-center flex-1">
          <span className="text-4xl font-bold text-[#00FFFF] block">{matches.length}</span>
          <p className="text-gray-400">Matches Played</p>
        </div>
      </div>

      <div className="space-y-3">
        {matches.map((match, index) => (
          <div key={index} className="flex justify-between items-center p-4 border border-cyan-500 rounded-lg">
            <div className="flex-1">
              <span className="font-semibold text-white">{match.team1}</span> vs{" "}
              <span className="font-semibold text-white">{match.team2}</span>
            </div>
            <div className="flex-1 text-center text-[#00FFFF]">{match.score}</div>
            <div className="flex-1 text-right font-bold text-white">{match.result}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <a href="#" className="text-[#00FFFF] hover:underline">View More</a>
      </div>
    </section>
  );
};

export default Matches;
