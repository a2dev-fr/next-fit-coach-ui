import { User, Session } from '@supabase/supabase-js';

export interface AuthUser extends User {
  // Add any custom user properties here
}

export interface AuthState {
  user: AuthUser | null;
  session: Session | null;
  initialized: boolean;
}

export interface AuthStore extends AuthState {
  setUser: (user: AuthUser | null) => void;
  setSession: (session: Session | null) => void;
  setInitialized: (initialized: boolean) => void;
  reset: () => void;
}