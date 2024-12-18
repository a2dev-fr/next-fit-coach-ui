import React from 'react';
import { Card, CardHeader } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

export default function SettingsHeader() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">{t('account.settings.title')}</h1>
      </CardHeader>
    </Card>
  );
}