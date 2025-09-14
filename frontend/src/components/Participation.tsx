import React from "react";
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";
import { Users } from "lucide-react";

interface CardData {
  title: string;
  value: number;
  trend: "up" | "down";
  trendValue: string;
  icon: React.ReactNode;
}

interface ChartData {
  name: string;
  value: number;
}

const Participation: React.FC = () => {
  const cardData: CardData[] = [
    { title: "Total Users", value: 1200, trend: "up", trendValue: "+100", icon: <Users size={28} /> },
    { title: "Active Users", value: 980, trend: "up", trendValue: "+50", icon: <Users size={28} /> },
    { title: "New Users", value: 45, trend: "up", trendValue: "+5", icon: <Users size={28} /> },
  ];

  const chartData: ChartData[] = [
    { name: "Week 1", value: 200 },
    { name: "Week 2", value: 250 },
    { name: "Week 3", value: 300 },
    { name: "Week 4", value: 400 },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Participation Overview</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#13161fff] p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-white text-lg font-semibold">{card.title}</div>
              <div className="text-white">{card.icon}</div>
            </div>
            <div className="text-white text-3xl font-bold">{card.value}</div>
            <div className={`mt-2 text-sm font-medium ${card.trend === "up" ? "text-green-400" : "text-red-400"}`}>
              {card.trendValue} {card.trend === "up" ? "↑" : "↓"}
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
        <DashboardChart data={chartData} title="Weekly User Growth" />
      </div>
    </div>
  );
};

export default Participation;
