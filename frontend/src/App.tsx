import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; // create this page // create this page
import Register from "./pages/Register";
import AdminDb from "./pages/admin/AdminDashboard"
import Admbrc from "./pages/admin/AdminBraketPage"
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admindb" element ={<AdminDb />} />
        <Route path="/adbrac" element ={<Admbrc/>}/>
      </Routes>
    </Router>
  );
};

export default App;
