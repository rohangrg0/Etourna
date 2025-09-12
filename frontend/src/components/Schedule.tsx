import React, { useState } from "react";

interface Match {
  id: number;
  team1: string;
  team2: string;
  scheduled_at: string;
}

interface ScheduleProps {
  matches?: Match[];
  onScheduleChange?: (id: number, value: string) => void;
}

const initialMatches: Match[] = [
  { id: 1, team1: "TEAM BIG BAAM", team2: "FULL SENSE", scheduled_at: "2025-09-16T14:00" },
  { id: 2, team1: "BREN ESPORTS", team2: "CERBERUS ESPORTS", scheduled_at: "2025-09-16T17:00" },
  { id: 3, team1: "ALTER EGO", team2: "BOOM ESPORTS", scheduled_at: "2025-09-17T14:00" },
  { id: 4, team1: "PAPER REX", team2: "CBT GAMING", scheduled_at: "2025-09-17T17:00" },
];

const Schedule: React.FC<ScheduleProps> = ({ matches = initialMatches, onScheduleChange }) => {
  const [localMatches, setLocalMatches] = useState(matches);

  const handleChange = (id: number, value: string) => {
    const updated = localMatches.map((m) =>
      m.id === id ? { ...m, scheduled_at: value } : m
    );
    setLocalMatches(updated);
    if (onScheduleChange) onScheduleChange(id, value);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#00FFFF] mb-4">Match Schedule</h2>
      <div className="flex flex-col gap-4">
        {localMatches.map((match) => (
          <div
            key={match.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
          >
            <div>
              <p>
                {match.team1} vs {match.team2}
              </p>
            </div>
            <input
              type="datetime-local"
              value={match.scheduled_at}
              onChange={(e) => handleChange(match.id, e.target.value)}
              className="bg-gray-700 text-white px-2 py-1 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
