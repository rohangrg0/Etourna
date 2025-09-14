import React from "react";
import Sidebar from "../../components/Sidebar";
import Participation from "../../components/Participation";
import Tournaments from "../../components/Tournaments";
import Matches from "../../components/Matches";

const AdminDashboard: React.FC = () => {
  const username = "Admin";

  return (
    <div className="flex h-screen bg-[#0A0A0F] text-white">
      <Sidebar username={username} />
     <main className="flex-1 p-7 overflow-y-auto">
    <Participation />
    <Tournaments />
    <Matches />
    </main>

    </div>
  );
};

export default AdminDashboard;
