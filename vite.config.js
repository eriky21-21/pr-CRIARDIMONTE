import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite com suporte ao Supabase
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@supabase/supabase-js'] // garante que o Supabase será incluído no build
  },
  build: {
    rollupOptions: {
      external: [] // deixamos vazio para não excluir nenhuma lib importante
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
