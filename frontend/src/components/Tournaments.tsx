// components/Tournaments.tsx
import React from "react";
import DashboardTable from "./DashboardTable";

const Tournaments: React.FC = () => {
  const columns = [
    { title: "Tournament Name", key: "name" },
    { title: "Game", key: "game" },
    { title: "Teams", key: "teams" },
    { title: "Status", key: "status" },
  ];

  const data = [
    { name: "Summer Cup", game: "FIFA", teams: 8, status: "Active" },
    { name: "Winter Clash", game: "PUBG", teams: 16, status: "Upcoming" },
    { name: "Autumn League", game: "CS:GO", teams: 12, status: "Completed" },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Tournaments</h2>
      <DashboardTable columns={columns} data={data} title="All Tournaments" />
    </div>
  );
};

export default Tournaments;
