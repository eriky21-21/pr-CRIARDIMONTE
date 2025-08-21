// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// URL e Key vêm do arquivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Cria a instância do Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
