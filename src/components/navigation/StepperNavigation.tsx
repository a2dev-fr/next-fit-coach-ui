import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProgressBar from '../ProgressBar';

interface StepperNavigationProps {
  currentStep: number;
  totalSteps: number;
  showBack?: boolean;
  className?: string;
}

export default function StepperNavigation({
  currentStep,
  totalSteps,
  showBack = true,
  className
}: StepperNavigationProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={className}>
      {/* Progress Bar */}
      <div className="w-full mb-4 sm:mb-8">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Back Button - Only show if not first step */}
      {showBack && currentStep > 1 && (
        <div className="fixed bottom-4 left-3 sm:left-4 z-10">
          <Button
            variant="light"
            isIconOnly
            aria-label={t('common.back')}
            onClick={() => navigate(-1)}
            className="text-sm bg-background/60 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}