// components/DashboardCard.tsx
import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: "up" | "down";
  trendValue?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, trend, trendValue }) => {
  return (
    <div className="bg-gray-800 text-white rounded-2xl p-4 shadow-md w-64">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon && <div className="text-3xl">{icon}</div>}
      </div>
      {trend && trendValue && (
        <p className={`mt-2 text-sm ${trend === "up" ? "text-green-400" : "text-red-400"}`}>
          {trend === "up" ? "↑" : "↓"} {trendValue}
        </p>
      )}
    </div>
  );
};

export default DashboardCard;
