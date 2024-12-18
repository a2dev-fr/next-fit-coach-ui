import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';
import { AuthUser } from '../../types/auth';

export function useAuthState() {
  const { setUser, setSession, setInitialized } = useAuthStore();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user as AuthUser ?? null);
      setInitialized(true);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user as AuthUser ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser, setSession, setInitialized]);

  return useAuthStore();
}