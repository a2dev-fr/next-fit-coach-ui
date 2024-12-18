import { useState, useCallback } from 'react';
import { logError } from '../utils/errors';

export function useErrorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [retryFn, setRetryFn] = useState<(() => void) | undefined>();

  const showError = useCallback((error: Error, retry?: () => void, context?: string) => {
    logError(error, context);
    setError(error);
    setRetryFn(() => retry);
    setIsOpen(true);
  }, []);

  const hideError = useCallback(() => {
    setIsOpen(false);
    setError(null);
    setRetryFn(undefined);
  }, []);

  const handleRetry = useCallback(() => {
    hideError();
    retryFn?.();
  }, [retryFn, hideError]);

  return {
    isOpen,
    error,
    showError,
    hideError,
    handleRetry
  };
}