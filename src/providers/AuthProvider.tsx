import React from 'react';
import { useAuthState } from '../hooks/auth/useAuthState';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const { initialized } = useAuthState();

  if (!initialized) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}