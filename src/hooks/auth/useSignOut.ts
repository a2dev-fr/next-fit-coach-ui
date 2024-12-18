import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';
import { useToast } from '../useToast';

export function useSignOut() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { reset } = useAuthStore();
  const { showError, showSuccess } = useToast();

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      reset();
      showSuccess(t('auth.signedOut'));
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'auth.signOut');
      }
    }
  };

  return { signOut };
}