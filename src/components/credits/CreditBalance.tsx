import React from 'react';
import { Card, CardBody, Spinner } from '@nextui-org/react';
import { Coins } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCredits } from '../../hooks/useCredits';

export default function CreditBalance() {
  const { t } = useTranslation();
  const { credits, loading, error } = useCredits();

  if (loading) {
    return (
      <Card>
        <CardBody className="flex items-center justify-center py-8">
          <Spinner size="sm" />
        </CardBody>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-danger">
        <CardBody className="text-center text-danger">
          {error}
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardBody className="flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Coins className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground-500">{t('credits.balance')}</p>
            <p className="text-xl font-semibold">{credits}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}