import { User } from '@supabase/supabase-js';

export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ACCOUNT: '/account',
  SETTINGS: '/settings',
  GENDER: '/gender',
  AGE: '/age',
  PHYSICAL: '/physical',
  TRAINING_DAYS: '/training-days',
  PREFERENCES: '/preferences',
  REVIEW: '/review',
  PLAN: '/plan',
  TERMS: '/terms',
  PRIVACY: '/privacy'
} as const;

export const getProtectedPaths = (user: User | null) => ({
  account: {
    path: PATHS.ACCOUNT,
    label: 'navigation.account',
    protected: true,
    visible: !!user
  },
  settings: {
    path: PATHS.SETTINGS,
    label: 'navigation.settings',
    protected: true,
    visible: !!user
  }
});

export const getPublicPaths = (user: User | null) => ({
  home: {
    path: PATHS.HOME,
    label: 'navigation.home',
    protected: false,
    visible: true
  },
  about: {
    path: PATHS.ABOUT,
    label: 'navigation.about',
    protected: false,
    visible: true
  },
  login: {
    path: PATHS.LOGIN,
    label: 'navigation.login',
    protected: false,
    visible: !user
  }
});

export const getAllPaths = (user: User | null) => ({
  ...getPublicPaths(user),
  ...getProtectedPaths(user)
});