import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/layout/Container';
import Section from '../../components/layout/Section';
import LegalSection from '../../components/legal/LegalSection';
import LastUpdated from '../../components/legal/LastUpdated';

export default function Terms() {
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
          
          <h1 className="text-3xl font-bold mb-4">{t('legal.terms.title')}</h1>
          <LastUpdated date="March 1, 2024" />
        </div>

        <div className="space-y-6">
          <LegalSection title={t('legal.terms.sections.acceptance')}>
            <p>By accessing and using NextFit Coach's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </LegalSection>

          <LegalSection title={t('legal.terms.sections.services')}>
            <p>NextFit Coach provides AI-powered fitness coaching services, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personalized workout plans</li>
              <li>Exercise recommendations</li>
              <li>Progress tracking</li>
              <li>Fitness goal setting and monitoring</li>
            </ul>
          </LegalSection>

          <LegalSection title={t('legal.terms.sections.aiDisclaimer')}>
            <p>Our AI-powered recommendations are generated based on the information you provide and general fitness principles. While we strive for accuracy:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our AI system provides general fitness guidance and should not replace professional medical advice</li>
              <li>Users should consult healthcare providers before starting any exercise program</li>
              <li>We do not guarantee specific fitness results</li>
            </ul>
          </LegalSection>

          <LegalSection title={t('legal.terms.sections.userResponsibilities')}>
            <p>As a user of NextFit Coach, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate personal information</li>
              <li>Use the service responsibly and safely</li>
              <li>Respect your physical limitations</li>
              <li>Not share your account credentials</li>
              <li>Report any safety concerns or technical issues</li>
            </ul>
          </LegalSection>

          <LegalSection title={t('legal.terms.sections.subscription')}>
            <p>Our subscription terms include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monthly or annual billing options</li>
              <li>Automatic renewal unless cancelled</li>
              <li>Pro-rated refunds for annual subscriptions</li>
              <li>Price changes with 30-day notice</li>
            </ul>
          </LegalSection>

          <LegalSection title={t('legal.terms.sections.liability')}>
            <p>NextFit Coach's liability is limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The amount paid for our services in the past 12 months</li>
              <li>We are not liable for injuries during exercise</li>
              <li>Users assume all risks associated with physical activity</li>
            </ul>
          </LegalSection>
        </div>
      </Container>
    </Section>
  );
}