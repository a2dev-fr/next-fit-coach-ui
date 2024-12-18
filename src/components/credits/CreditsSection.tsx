import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCredits } from '../../hooks/useCredits';
import CreditsDisplay from './CreditsDisplay';
import CreditsSkeleton from './CreditsSkeleton';
import ErrorMessage from '../feedback/ErrorMessage';

export default function CreditsSection() {
  const { t } = useTranslation();
  const { credits, loading, error } = useCredits();

  return (
    <div>
      <div className="flex items-center mb-2">
        <h2 className="text-base font-medium text-foreground-600">
          {t('credits.title')}
        </h2>
      </div>
      {loading ? (
        <CreditsSkeleton />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <CreditsDisplay credits={credits} />
      )}
    </div>
  );
}