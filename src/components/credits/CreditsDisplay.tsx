import React from 'react';
import { Coins } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/format';

interface CreditsDisplayProps {
  credits: number;
}

export default function CreditsDisplay({ credits }: CreditsDisplayProps) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
      <div className="p-2.5 rounded-lg bg-primary/10">
        <Coins className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="text-sm text-foreground-500">{t('credits.balance')}</p>
        <p className="text-xl font-semibold">{formatNumber(credits)}</p>
      </div>
    </div>
  );
}