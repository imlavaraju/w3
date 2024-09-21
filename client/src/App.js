import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserForm from "./pages/UserForm";
import AdminDashboard from "../src/pages/AdminDashboard";
import "./App.css";

const App = () => {
  const [form, setForm] = useState(true);
  const navigate = useNavigate();

  const handlePage = () => {
    if (form) {
      navigate("/dashboard");
      setForm(false);
    } else {
      navigate("/");
      setForm(true);
    }
  };

  return (
    <div className="app-container">
      {/* Top-right Dashboard Button */}
      <div className="header">
        <button className="dashboard-button" onClick={handlePage}>
          {form ? "Go to Dashboard" : "Go to Form"}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
