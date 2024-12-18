import { ErrorInfo, ErrorResponse } from '../types/error';

export function getErrorInfo(error: Error | null): ErrorInfo {
  if (!error) {
    return {
      title: 'Unknown Error',
      message: 'An unexpected error occurred.',
      type: 'unknown'
    };
  }

  // Network errors
  if (!navigator.onLine || error.message.includes('network')) {
    return {
      title: 'Connection Error',
      message: 'Please check your internet connection and try again.',
      type: 'network'
    };
  }

  // Parse error response if available
  let errorResponse: ErrorResponse = {};
  try {
    if (error instanceof Error && 'response' in error) {
      const response = (error as any).response;
      errorResponse = response?.data || {};
    }
  } catch (e) {
    console.error('Error parsing error response:', e);
  }

  // Authentication errors
  if (
    error.message.includes('auth') ||
    error.message.includes('unauthorized') ||
    error.message.includes('forbidden') ||
    errorResponse.code?.includes('auth')
  ) {
    return {
      title: 'Authentication Error',
      message: 'There was a problem with your authentication.',
      type: 'auth',
      details: getAuthErrorDetails(error.message)
    };
  }

  // Server errors
  if (
    error.message.includes('server') ||
    error.message.includes('500') ||
    errorResponse.code?.includes('server')
  ) {
    return {
      title: 'Server Error',
      message: 'Our servers are experiencing issues. Please try again later.',
      type: 'server'
    };
  }

  // Default unknown error
  return {
    title: 'Error',
    message: error.message || 'An unexpected error occurred.',
    type: 'unknown'
  };
}

function getAuthErrorDetails(errorMessage: string): string {
  if (errorMessage.includes('invalid_credentials')) {
    return 'The email or password you entered is incorrect.';
  }
  if (errorMessage.includes('email_taken')) {
    return 'This email address is already registered.';
  }
  if (errorMessage.includes('weak_password')) {
    return 'Please choose a stronger password.';
  }
  return 'Please check your credentials and try again.';
}

export function logError(error: Error, context?: string): void {
  console.error(`[${context || 'Error'}]`, {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString()
  });
}