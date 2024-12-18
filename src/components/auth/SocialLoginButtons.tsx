import React from 'react';
import { useSocialAuth } from '../../hooks/useSocialAuth';
import GoogleButton from './social/GoogleButton';
import FacebookButton from './social/FacebookButton';

export default function SocialLoginButtons() {
  const { signInWithGoogle, signInWithFacebook, loading } = useSocialAuth();

  return (
    <div className="space-y-3">
      <GoogleButton onClick={signInWithGoogle} disabled={loading} />
      <FacebookButton onClick={signInWithFacebook} disabled={loading} />
    </div>
  );
}