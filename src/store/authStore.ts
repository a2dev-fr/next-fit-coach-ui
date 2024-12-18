import { create } from 'zustand';
import { AuthStore } from '../types/auth';
import { createAuthSlice } from './slices/authSlice';

export const useAuthStore = create<AuthStore>()((...args) => ({
  ...createAuthSlice(...args),
}));