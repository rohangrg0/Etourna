import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, List, History, Trophy, Grid, Settings, LogOut } from "lucide-react";
import logo from "../assets/zoc.svg";

interface SidebarProps {
  username: string;
  avatarUrl?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ username, avatarUrl }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const expanded = !isCollapsed || isHovered;
  const location = useLocation();

  const menuItems = [
    { label: "Home", icon: <Home size={20} />, to: "/admindb" }, // admin dashboard
    { label: "Players Info", icon: <Users size={20} />, to: "/admin/players" },
    { label: "Match List", icon: <List size={20} />, to: "/admin/matches" },
    { label: "Tournament History", icon: <History size={20} />, to: "/admin/history" },
    { label: "Standings", icon: <Trophy size={20} />, to: "/admin/standings" },
    { label: "Brackets", icon: <Grid size={20} />, to: "/adbrac" },
    { label: "Settings", icon: <Settings size={20} />, to: "/admin/settings" },
    { label: "Log Out", icon: <LogOut size={20} />, to: "/logout" },
  ];

  return (
    <aside
      className={`${
        expanded ? "w-64" : "w-20"
      } bg-[#11121A] text-gray-300 border-r border-cyan-500 transition-all duration-300 flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className="flex justify-center p-4">
        <Link to="/">
          <img
            src={logo}
            alt="Zone-o-C Logo"
            className={`object-contain transition-all duration-300 ${
              expanded ? "w-32 h-auto" : "w-12 h-auto"
            }`}
          />
        </Link>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-[#00FFFF] hover:text-white transition"
        >
          {isCollapsed ? "" : ""}
        </button>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mb-8 transition-all duration-300">
        <img
          src={avatarUrl || "https://via.placeholder.com/80"}
          alt="Admin Avatar"
          className={`rounded-full border-2 border-cyan-500 object-cover transition-all duration-300 ${
            expanded ? "w-20 h-20" : "w-12 h-12"
          }`}
        />
        {expanded && (
          <>
            <p className="mt-2 font-bold text-[#00FFFF]">{username}</p>
            <p className="text-sm text-gray-400">Admin</p>
          </>
        )}
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-5 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`flex items-center space-x-3 px-2 py-2 rounded-md transition-colors ${
              location.pathname === item.to
                ? "bg-[#00FFFF]/20 text-[#00FFFF]"
                : "text-gray-300 hover:text-[#00FFFF] hover:bg-[#1A1B25]"
            }`}
          >
            {item.icon}
            {expanded && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
