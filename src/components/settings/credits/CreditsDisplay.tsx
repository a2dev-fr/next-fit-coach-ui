import React from 'react';
import { Coins } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../utils/format';

interface CreditsDisplayProps {
  credits: number;
}

export default function CreditsDisplay({ credits }: CreditsDisplayProps) {
  const { t } = useTranslation();

  if (credits === 0) {
    return (
      <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
        <p className="text-warning text-sm">{t('credits.empty')}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
      <div className="p-3 rounded-xl bg-primary/10">
        <Coins className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-semibold">{formatNumber(credits)}</p>
        <p className="text-sm text-foreground-500">{t('account.settings.credits.remaining')}</p>
      </div>
    </div>
  );
}