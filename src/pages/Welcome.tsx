import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import Logo from '../components/logo/Logo';
import Section from '../components/layout/Section';

export default function Welcome() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Section className="flex-1 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6 md:space-y-8">
        <Logo size="lg" />
        <h1 className="text-4xl md:text-6xl font-bold">
          {t('welcome.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          {t('welcome.subtitle')}
        </p>
        <Button
          size="lg"
          color="primary"
          variant="shadow"
          onClick={() => navigate('/gender')}
          className="text-lg"
        >
          {t('welcome.cta')}
        </Button>
      </div>
    </Section>
  );
}