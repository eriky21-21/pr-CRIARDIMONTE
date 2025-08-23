import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Railway define a porta via process.env.PORT
export default defineConfig({
  base: "./", // 👈 garante que os assets sejam encontrados no deploy
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: true
  },
  preview: {
    port: process.env.PORT || 3000,
    host: true
  }
})
