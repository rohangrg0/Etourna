// components/RecentTournaments.tsx
import React from "react";

interface Tournament {
  name: string;
  date: string;
}

interface Props {
  tournaments: Tournament[];
}

const RecentTournaments: React.FC<Props> = ({ tournaments }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80">
      <h3 className="text-gray-500 font-medium mb-4">Recent Tournaments</h3>
      <ul>
        {tournaments.map((t, idx) => (
          <li key={idx} className="mb-2">
            <span className="font-semibold">{t.name}</span> - {t.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTournaments;
