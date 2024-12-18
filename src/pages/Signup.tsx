import React from 'react';
import SignupForm from '../components/auth/SignupForm';
import PageContainer from '../components/PageContainer';

export default function Signup() {
  return (
    <PageContainer>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <SignupForm />
      </div>
    </PageContainer>
  );
}