import React from "react";

interface Match {
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
}

interface BracketProps {
  matches: Match[];
}

const Bracket: React.FC<BracketProps> = ({ matches }) => {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex justify-center p-10">
      <div className="grid grid-cols-4 gap-8">
        {/* Upper Bracket Quarterfinals */}
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-lg text-green-400 mb-2">
            Upper Bracket Quarterfinals
          </h2>
          {matches.map((m, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="flex justify-between">
                <span>{m.team1}</span>
                <span>{m.score1 ?? 0}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>{m.team2}</span>
                <span>{m.score2 ?? 0}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upper Bracket Semifinals */}
        <div className="flex flex-col gap-20 mt-12">
          <h2 className="font-bold text-lg text-green-400 mb-2">Semifinals</h2>
          <div className="bg-gray-800 p-4 rounded-lg h-16"></div>
          <div className="bg-gray-800 p-4 rounded-lg h-16"></div>
        </div>

        {/* Upper Bracket Finals */}
        <div className="flex flex-col gap-40 mt-24">
          <h2 className="font-bold text-lg text-green-400 mb-2">Finals</h2>
          <div className="bg-gray-800 p-4 rounded-lg h-16"></div>
        </div>

        {/* Grand Finals */}
        <div className="flex flex-col justify-center mt-48">
          <h2 className="font-bold text-lg text-green-400 mb-2">Grand Finals</h2>
          <div className="bg-gray-800 p-6 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Bracket;
