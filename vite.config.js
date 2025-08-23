import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Railway define a porta via process.env.PORT
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    host: true
  },
  preview: {
    port: process.env.PORT || 3000,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})
