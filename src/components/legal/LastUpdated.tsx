import React from 'react';
import { useTranslation } from 'react-i18next';

interface LastUpdatedProps {
  date: string;
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  const { t } = useTranslation();
  
  return (
    <p className="text-sm text-foreground-500 mb-6">
      {t('legal.lastUpdated')}: {date}
    </p>
  );
}