// components/DashboardChart.tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

interface DashboardChartProps {
  data: { name: string; value: number }[];
  title?: string;
  lineColor?: string;
}

const DashboardChart: React.FC<DashboardChartProps> = ({ data, title, lineColor = "#00FFFF" }) => {
  return (
    <div className="bg-gray-800 text-white rounded-2xl p-4 shadow-md w-full h-64">
      {title && <p className="text-lg font-bold mb-2">{title}</p>}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#333" strokeDasharray="5 5" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={lineColor} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
