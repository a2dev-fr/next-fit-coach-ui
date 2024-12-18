import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import LegalSection from '../../components/legal/LegalSection';
import LastUpdated from '../../components/legal/LastUpdated';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <Section>
      <Container className="max-w-4xl">
        <div className="mb-8">
          <Button
            as={Link}
            to="/"
            variant="light"
            startContent={<ArrowLeft className="w-4 h-4" />}
            className="mb-6"
          >
            {t('common.back')}
          </Button>
          
          <h1 className="text-3xl font-bold mb-4">{t('legal.privacy.title')}</h1>
          <LastUpdated date="March 1, 2024" />
        </div>

        <div className="space-y-6">
          <LegalSection title={t('legal.privacy.sections.dataCollection')}>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email, age, gender)</li>
              <li>Physical attributes (height, weight, fitness level)</li>
              <li>Fitness goals and preferences</li>
              <li>Exercise history and progress data</li>
              <li>Device and usage information</li>
            </ul>
          </LegalSection>

          <LegalSection title={t('legal.privacy.sections.aiUsage')}>
            <p>Our AI system uses your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Generate personalized workout plans</li>
              <li>Adapt recommendations based on progress</li>
              <li>Improve our training algorithms</li>
              <li>Enhance service quality</li>
            </ul>
            <p className="mt-4">All AI processing follows strict privacy and security protocols.</p>
          </LegalSection>

          <LegalSection title={t('legal.privacy.sections.dataProtection')}>
            <p>We protect your data through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption</li>
              <li>Regular security audits</li>
              <li>Access controls and monitoring</li>
              <li>Secure data centers</li>
              <li>Employee training and compliance</li>
            </ul>
          </LegalSection>

          <LegalSection title={t('legal.privacy.sections.dataSharing')}>
            <p>We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers (hosting, analytics)</li>
              <li>Payment processors</li>
              <li>Legal authorities when required</li>
            </ul>
            <p className="mt-4">We never sell your personal information to third parties.</p>
          </LegalSection>

          <LegalSection title={t('legal.privacy.sections.userRights')}>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data correction</li>
              <li>Delete your account and data</li>
              <li>Export your information</li>
              <li>Opt-out of data processing</li>
            </ul>
          </LegalSection>

          <LegalSection title={t('legal.privacy.sections.cookies')}>
            <p>We use cookies for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Authentication and security</li>
              <li>Preferences and settings</li>
              <li>Analytics and performance</li>
              <li>Feature functionality</li>
            </ul>
            <p className="mt-4">You can manage cookie preferences in your browser settings.</p>
          </LegalSection>
        </div>
      </Container>
    </Section>
  );
}