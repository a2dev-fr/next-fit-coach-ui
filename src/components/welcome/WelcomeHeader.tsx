import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../logo/Logo';

export default function WelcomeHeader() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6 md:space-y-8">
      <Logo size="lg" />
      <h1 className="text-4xl md:text-6xl font-bold">
        {t('welcome.title')}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
        {t('welcome.subtitle')}
      </p>
    </div>
  );
}