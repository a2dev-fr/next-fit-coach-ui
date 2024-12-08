interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export const supabaseConfig: SupabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
};

// Validate configuration
Object.entries(supabaseConfig).forEach(([key, value]) => {
  if (!value) {
    throw new Error(
      `Missing Supabase configuration: ${key}. Please check your environment variables.`
    );
  }
});