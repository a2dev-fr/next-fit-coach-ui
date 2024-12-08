import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import PageContainer from '../components/PageContainer';

export default function Login() {
  return (
    <PageContainer>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <LoginForm />
      </div>
    </PageContainer>
  );
}