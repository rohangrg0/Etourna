// components/Matches.tsx
import React from "react";
import DashboardTable from "./DashboardTable";
import DashboardChart from "./DashboardChart";

const Matches: React.FC = () => {
  const columns = [
    { title: "Match", key: "match" },
    { title: "Teams", key: "teams" },
    { title: "Score", key: "score" },
    { title: "Status", key: "status" },
  ];

  const data = [
    { match: "Quarterfinal 1", teams: "Team A vs Team B", score: "2-1", status: "Finished" },
    { match: "Quarterfinal 2", teams: "Team C vs Team D", score: "-", status: "Scheduled" },
  ];

  const chartData = [
    { name: "Team A", value: 8 },
    { name: "Team B", value: 5 },
    { name: "Team C", value: 6 },
    { name: "Team D", value: 4 },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Matches</h2>
      <DashboardTable columns={columns} data={data} title="Recent Matches" />
      <div className="mt-6">
        <DashboardChart data={chartData} title="Team Scores Overview" />
      </div>
    </div>
  );
};

export default Matches;
