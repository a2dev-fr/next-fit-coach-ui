import React from 'react';
import { Progress } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const { t } = useTranslation();
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <Progress
        size="md"
        radius="sm"
        classNames={{
          base: "w-full",
          track: "drop-shadow-md border border-default",
          indicator: "bg-gradient-to-r from-primary-600 to-primary-400",
          label: "tracking-wider font-medium text-default-700",
          value: "text-foreground/60"
        }}
        value={progress}
        showValueLabel={true}
        label={`${t('common.step')} ${currentStep}/${totalSteps}`}
      />
    </div>
  );
}