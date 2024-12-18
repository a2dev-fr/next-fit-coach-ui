import React from 'react';
import Section from '../components/layout/Section';
import WelcomeHeader from '../components/welcome/WelcomeHeader';
import WelcomeActions from '../components/welcome/WelcomeActions';

export default function Welcome() {
  return (
    <Section className="flex-1 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6 md:space-y-8">
        <WelcomeHeader />
        <WelcomeActions />
      </div>
    </Section>
  );
}