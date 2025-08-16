import React from "react";

export default function Login() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2" />
        <input type="password" placeholder="Senha" className="border p-2 w-full mb-2" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
      </form>
    </div>
  );
}
