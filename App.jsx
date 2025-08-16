import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <nav className="w-full bg-blue-600 p-4 text-white">
        <h1 className="text-lg font-bold">Criar di Monte V3</h1>
        <div className="mt-2">
          <Link to="/" className="mr-4">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="w-full max-w-3xl p-6">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
