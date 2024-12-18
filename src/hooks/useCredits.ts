import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { supabase } from '../lib/supabase';

export function useCredits() {
  const [credits, setCredits] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        if (!user) {
          setError('User not authenticated');
          return;
        }

        const { data, error: queryError } = await supabase
          .from('credits')
          .select('count')
          .eq('user_id', user.id)
          .single();

        if (queryError) throw queryError;

        setCredits(data?.count ?? 0);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch credits');
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [user]);

  return { credits, loading, error };
}