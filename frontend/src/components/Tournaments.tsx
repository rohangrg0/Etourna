import React from "react";

interface Tournament {
  name: string;
  start: string;
  end: string;
  status: string;
}

const tournaments: Tournament[] = [
  { name: "VCT PACIFIC", start: "2024/12/14", end: "2024/12/29", status: "Approved" },
  { name: "MLBB QUALIFIERS", start: "2024/12/14", end: "2024/12/29", status: "Disapproved" },
  { name: "MLBB QUALIFIERS ASIA", start: "2024/12/14", end: "2024/12/29", status: "Pending" },
];

const Tournaments: React.FC = () => {
  return (
    <section className="bg-[#11121A] p-6 rounded-lg border border-cyan-500 mb-6">
      <h2 className="text-xl font-bold mb-4 text-[#00FFFF]">Tournaments</h2>
      <div className="space-y-4">
        {tournaments.map((tournament, index) => (
          <div key={index} className="flex justify-between items-center p-4 border border-cyan-500 rounded-lg">
            <div>
              <strong className="text-white">{tournament.name}</strong>
              <p className="text-gray-400">Start: {tournament.start}</p>
              <p className="text-gray-400">End: {tournament.end}</p>
            </div>
            <button
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                tournament.status === "Approved"
                  ? "bg-[#00FFFF] text-black"
                  : tournament.status === "Disapproved"
                  ? "bg-red-600 text-white"
                  : "bg-yellow-400 text-black"
              }`}
            >
              {tournament.status}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tournaments;
