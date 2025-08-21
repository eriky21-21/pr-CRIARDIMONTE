// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Variáveis de ambiente (confira no Railway)
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
