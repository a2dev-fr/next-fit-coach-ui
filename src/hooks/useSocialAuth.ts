import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';

export function useSocialAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUser, setSession } = useAuthStore();

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) throw error;

      if (data.session) {
        setUser(data.session.user);
        setSession(data.session);
        navigate('/');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = useCallback(() => {
    handleSocialLogin('google');
  }, []);

  const signInWithFacebook = useCallback(() => {
    handleSocialLogin('facebook');
  }, []);

  return {
    signInWithGoogle,
    signInWithFacebook,
    loading,
    error
  };
}