import React from "react";

interface Round {
  round: string;
  teams: string[];
}

interface RoundRobinProps {
  rounds?: Round[];
}

const defaultRounds: Round[] = [
  { round: "Round 1", teams: ["TEAM A vs TEAM B", "TEAM C vs TEAM D"] },
  { round: "Round 2", teams: ["TEAM A vs TEAM C", "TEAM B vs TEAM D"] },
  { round: "Round 3", teams: ["TEAM A vs TEAM D", "TEAM B vs TEAM C"] },
];

const RoundRobin: React.FC<RoundRobinProps> = ({ rounds = defaultRounds }) => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-10">
      <h2 className="text-2xl font-bold text-[#00FFFF] mb-6">Round Robin Schedule</h2>
      <div className="space-y-8">
        {rounds.map((r, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg text-green-400 mb-2">{r.round}</h3>
            <ul className="list-disc list-inside space-y-1">
              {r.teams.map((t, i) => (
                <li key={i} className="text-white">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundRobin;
