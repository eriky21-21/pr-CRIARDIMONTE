import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <p>Email do usuário: <b>teste@exemplo.com</b></p>
      <p>Data de cadastro: <b>2025-08-15</b></p>
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-4">Logout</button>
    </div>
  );
}
