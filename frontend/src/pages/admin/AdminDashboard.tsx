// Dashboard.tsx
import React, { useState } from "react";
import StatCard from "../../components/StatCards";
import RecentTournaments from "../../components/RecentTournaments";
import TopUsers from "../../components/TopUsers";
import RevenueChart from "../../components/RevenueChart";
import Sidebar from "../../components/Sidebar";

const AdminDashboard: React.FC = () => {
  // Dummy Data
  const totalUsers = 1200;
  const totalTournaments = 35;
  const revenue = 24500;

  const recentTournaments = [
    { name: "Summer Cup", date: "2025-12-10" },
    { name: "Winter Clash", date: "2025-12-01" },
    { name: "Autumn Open", date: "2025-11-20" },
  ];

  const topUsers = [
    { name: "Rohan Gurung", points: 150 },
    { name: "Sita Lama", points: 120 },
    { name: "Amit Thapa", points: 100 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 2000 },
    { month: "Feb", revenue: 2500 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 3000 },
    { month: "May", revenue: 2200 },
    { month: "Jun", revenue: 2800 },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#FAF7F0" }}>
      {/* Sidebar */}
      <Sidebar username="Admin" />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stat Cards */}
        <div className="flex flex-wrap gap-6 mb-10">
          <StatCard title="Total Users" value={totalUsers} />
          <StatCard title="Total Tournaments" value={totalTournaments} />
          <StatCard title="Revenue" value={`$${revenue}`} />
        </div>

        {/* Main Dashboard Content */}
        <div className="flex flex-wrap gap-6">
          <RecentTournaments tournaments={recentTournaments} />
          <TopUsers users={topUsers} />
          <RevenueChart data={revenueData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
