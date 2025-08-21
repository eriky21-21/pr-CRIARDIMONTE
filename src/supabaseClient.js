// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// 🔑 pegue as chaves no dashboard do Supabase
const https://muxzmgxblgwhlnkqgyei.supabase.co

 = import.meta.env.VITE_SUPABASE_URL;
const eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11eHptZ3hibGd3aGxua3FneWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMTE3MjIsImV4cCI6MjA3MDg4NzcyMn0.N52hXa62IN6VV0QW8nP6f8A_LPHFSXHxSXvf4pfpvtg
 = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Cria a instância do cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
