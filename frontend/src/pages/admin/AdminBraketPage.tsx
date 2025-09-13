// AdminBracketPage.tsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Bracket from "../../components/Brackets";
import RoundRobin from "../../components/Roundrobin";
import Schedule from "../../components/Schedule";
import Footer from "../../components/Footer";

interface Match {
  id: number;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  scheduled_at?: string;
}

const initialMatches: Match[] = [
  { id: 1, team1: "TEAM BIG BAAM", team2: "FULL SENSE", score1: 0, score2: 0, scheduled_at: "2025-09-16T14:00" },
  { id: 2, team1: "BREN ESPORTS", team2: "CERBERUS ESPORTS", score1: 0, score2: 0, scheduled_at: "2025-09-16T17:00" },
  { id: 3, team1: "ALTER EGO", team2: "BOOM ESPORTS", score1: 0, score2: 0, scheduled_at: "2025-09-17T14:00" },
  { id: 4, team1: "PAPER REX", team2: "CBT GAMING", score1: 0, score2: 0, scheduled_at: "2025-09-17T17:00" },
];

const AdminBracketPage: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [activeTab, setActiveTab] = useState<"brackets" | "roundrobin" | "schedule">("brackets");

  const handleMatchChange = (id: number, field: keyof Match, value: any) => {
    setMatches((prev) => prev.map((m) => (m.id === id ? { ...m, [field]: value } : m)));
  };

  const handleScheduleChange = (id: number, value: string) => {
    setMatches((prev) => prev.map((m) => (m.id === id ? { ...m, scheduled_at: value } : m)));
  };

  const handleSave = () => {
    console.log("Saved Data:", matches);
    alert("Data saved! Check console.");
  };

  return (
    <div className="flex min-h-screen bg-[#0A0A0F] text-white">
      <Sidebar username="Admin" />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-[#00FFFF] mb-6">Admin Tournament Management</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${activeTab === "brackets" ? "bg-[#00FFFF] text-black" : "bg-gray-800 text-white"}`}
            onClick={() => setActiveTab("brackets")}
          >
            Brackets
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === "roundrobin" ? "bg-[#00FFFF] text-black" : "bg-gray-800 text-white"}`}
            onClick={() => setActiveTab("roundrobin")}
          >
            Round Robin
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === "schedule" ? "bg-[#00FFFF] text-black" : "bg-gray-800 text-white"}`}
            onClick={() => setActiveTab("schedule")}
          >
            Schedule
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "brackets" && <Bracket matches={matches} onChange={handleMatchChange} />}
          {activeTab === "roundrobin" && <RoundRobin matches={matches} onChange={handleMatchChange} />}
          {activeTab === "schedule" && <Schedule matches={matches} onScheduleChange={handleScheduleChange} />}
        </div>

        <button
          onClick={handleSave}
          className="mt-6 bg-[#00FFFF] text-black px-6 py-2 rounded font-bold hover:bg-[#00CFFF] transition"
        >
          Save All
        </button>
      </div>
    </div>
    
  );
};

export default AdminBracketPage;
