import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173, // porta padrão do Vite
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: ["poetic-liberation-production.up.railway.app"],
  },
});
