import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Use admin login endpoint
      const response = await axios.post("http://localhost:8000/admin/login", {
        email,
        password,
      });

      const token = response.data.access_token;
      localStorage.setItem("admin_token", token); // store admin JWT

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.detail || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#FAF7F0] backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-8">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#FAF7F0] text-[#4A4947] border border-[#B17457] focus:outline-none focus:ring-2 focus:ring-[#B17457]"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#FAF7F0] text-[#4A4947] border border-[#B17457] focus:outline-none focus:ring-2 focus:ring-[#B17457]"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-[#4A4947] text-white font-bold rounded-lg transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;