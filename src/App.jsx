import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!logado ? (
        <Login onLogin={() => setLogado(true)} />
      ) : (
        <Dashboard onLogout={() => setLogado(false)} />
      )}
    </div>
  );
}
