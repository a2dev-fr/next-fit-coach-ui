import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import { useToast } from '../useToast';
import { useAuthStore } from '../../store/authStore';

export function useAccountData() {
  const { t } = useTranslation();
  const { reset } = useAuthStore();
  const { showError, showSuccess } = useToast();
  const [loading, setLoading] = useState(false);

  const downloadData = async () => {
    try {
      setLoading(true);
      
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) throw error;

      const userData = {
        profile: user,
        // Add other user data here
      };

      const blob = new Blob([JSON.stringify(userData, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `user-data-${new Date().toISOString()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showSuccess(t('account.dataDownloaded'));
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'account.downloadData');
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async () => {
    try {
      setLoading(true);
      
      const { error } = await supabase.rpc('delete_user');
      
      if (error) throw error;

      await supabase.auth.signOut();
      reset();
      showSuccess(t('account.deleted'));
      return true;
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'account.delete');
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    downloadData,
    deleteAccount
  };
}