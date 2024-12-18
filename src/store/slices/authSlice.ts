import { StateCreator } from 'zustand';
import { AuthStore, AuthUser } from '../../types/auth';
import { Session } from '@supabase/supabase-js';

const initialState = {
  user: null,
  session: null,
  initialized: false,
};

export const createAuthSlice: StateCreator<AuthStore> = (set) => ({
  ...initialState,
  setUser: (user: AuthUser | null) => set({ user }),
  setSession: (session: Session | null) => set({ session }),
  setInitialized: (initialized: boolean) => set({ initialized }),
  reset: () => set(initialState),
});