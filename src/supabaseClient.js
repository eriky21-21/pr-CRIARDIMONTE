// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// 🔑 Pega as variáveis do .env ou das Railway Variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// ⚠️ Se não encontrar, mostra erro no console (ajuda no debug no Railway)
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Variáveis do Supabase não foram encontradas. Verifique .env e Railway Variables.")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
