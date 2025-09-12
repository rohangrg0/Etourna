import React from "react";

const Participation: React.FC = () => {
  return (
    <section className="bg-[#11121A] p-6 rounded-lg border border-cyan-500 mb-6">
      <h2 className="text-xl font-bold mb-4 text-[#00FFFF]">Current Participation</h2>
      <div className="text-center p-6 border border-[#00FFFF] rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-white">Valorant Tournament</h3>
        <p className="text-gray-400 mb-2">Current Score</p>
        <span className="text-2xl font-bold text-[#00FFFF]">11 Points</span>
        <div className="mt-4">
          <a href="#" className="text-[#00FFFF] hover:underline">View More</a>
        </div>
      </div>
    </section>
  );
};

export default Participation;
