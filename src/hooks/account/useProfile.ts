import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import { useToast } from '../useToast';
import { AuthUser } from '../../types/auth';

export function useProfile(user: AuthUser | null) {
  const { t } = useTranslation();
  const { showError, showSuccess } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(user?.email || '');
  const [name, setName] = useState(user?.user_metadata?.full_name || '');

  const updateProfile = async () => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.updateUser({
        email,
        data: { full_name: name }
      });

      if (error) throw error;

      showSuccess(t('account.profileUpdated'));
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'account.updateProfile');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    name,
    setName,
    loading,
    updateProfile
  };
}