export type ErrorType = 'network' | 'auth' | 'server' | 'unknown';

export interface ErrorInfo {
  title: string;
  message: string;
  type: ErrorType;
  details?: string;
}

export interface ErrorResponse {
  code?: string;
  message?: string;
  details?: string;
}