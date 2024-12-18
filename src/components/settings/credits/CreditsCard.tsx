import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { useCredits } from '../../../hooks/useCredits';
import CreditsDisplay from './CreditsDisplay';
import CreditsSkeleton from './CreditsSkeleton';
import ErrorMessage from '../../feedback/ErrorMessage';

export default function CreditsCard() {
  const { t } = useTranslation();
  const { credits, loading, error } = useCredits();

  return (
    <Card>
      <CardHeader className="flex flex-col items-start gap-1">
        <h2 className="text-xl font-semibold">{t('account.settings.credits.title')}</h2>
      </CardHeader>
      <CardBody>
        {loading ? (
          <CreditsSkeleton />
        ) : error ? (
          <ErrorMessage message={t('credits.error')} />
        ) : (
          <CreditsDisplay credits={credits} />
        )}
      </CardBody>
    </Card>
  );
}