import { createClient } from '@supabase/supabase-js';

interface SupabaseConfig {
  url: string;
  anonKey: string;
}

// Default to empty strings to prevent runtime crashes
const supabaseConfig: SupabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
};

// Create client with safeguards
export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.anonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

// Export config for other uses
export { supabaseConfig };