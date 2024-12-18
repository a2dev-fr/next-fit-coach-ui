import React from 'react';
import { Progress } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

interface PasswordStrengthIndicatorProps {
  strength: number;
}

export default function PasswordStrengthIndicator({ strength }: PasswordStrengthIndicatorProps) {
  const { t } = useTranslation();

  const getStrengthColor = (strength: number) => {
    if (strength < 30) return "danger";
    if (strength < 60) return "warning";
    return "success";
  };

  const getStrengthLabel = (strength: number) => {
    if (strength < 30) return t('auth.signup.passwordStrength.weak');
    if (strength < 60) return t('auth.signup.passwordStrength.medium');
    return t('auth.signup.passwordStrength.strong');
  };

  if (strength === 0) return null;

  return (
    <div className="space-y-1">
      <Progress
        size="sm"
        value={strength}
        color={getStrengthColor(strength)}
        className="max-w-md"
      />
      <p className="text-xs text-foreground-500">
        {t('auth.signup.passwordStrength.title')}: {getStrengthLabel(strength)}
      </p>
    </div>
  );
}