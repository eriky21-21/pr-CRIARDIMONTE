// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// 🔑 Pega as variáveis do arquivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Cria a instância do cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
