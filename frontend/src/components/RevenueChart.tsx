// components/RevenueChart.tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  data: { month: string; revenue: number }[];
}

const RevenueChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex-1 min-w-[400px]">
      <h3 className="text-gray-500 font-medium mb-4">Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
