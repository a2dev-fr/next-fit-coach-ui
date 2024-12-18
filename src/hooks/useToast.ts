import { useCallback } from 'react';
import { useDisclosure } from '@nextui-org/react';
import { toast } from 'sonner';
import { ErrorInfo } from '../types/error';
import { getErrorInfo } from '../utils/errors';

export function useToast() {
  const showError = useCallback((error: Error, context?: string) => {
    const errorInfo: ErrorInfo = getErrorInfo(error);
    
    toast.error(errorInfo.message, {
      description: errorInfo.details,
      duration: 5000,
    });

    // Log error for debugging
    console.error(`[${context || 'Error'}]`, {
      message: error.message,
      type: errorInfo.type,
      details: errorInfo.details,
      timestamp: new Date().toISOString()
    });
  }, []);

  const showSuccess = useCallback((message: string) => {
    toast.success(message, {
      duration: 3000,
    });
  }, []);

  return {
    showError,
    showSuccess
  };
}