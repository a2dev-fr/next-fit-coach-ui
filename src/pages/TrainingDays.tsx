import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import DayGrid from '../components/training/DayGrid';
import { useTrainingDays } from '../hooks/useTrainingDays';
import { useFitnessStore } from '../store/fitnessStore';

export default function TrainingDays() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setTrainingDays } = useFitnessStore();
  const { selectedDays, toggleDay } = useTrainingDays();
  
  const days = [
    { key: 'monday', label: t('days.monday') },
    { key: 'tuesday', label: t('days.tuesday') },
    { key: 'wednesday', label: t('days.wednesday') },
    { key: 'thursday', label: t('days.thursday') },
    { key: 'friday', label: t('days.friday') },
    { key: 'saturday', label: t('days.saturday') },
    { key: 'sunday', label: t('days.sunday') }
  ];

  const handleContinue = () => {
    setTrainingDays(selectedDays);
    navigate('/preferences');
  };

  return (
    <PageContainer currentStep={4} totalSteps={7}>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">
            {t('trainingDays.title')}
          </h1>
          <p className="text-foreground-500">
            {t('trainingDays.subtitle')}
          </p>
        </div>

        <DayGrid
          days={days}
          selectedDays={selectedDays}
          onToggleDay={toggleDay}
        />

        <Button
          fullWidth
          size="lg"
          color="primary"
          onClick={handleContinue}
          isDisabled={selectedDays.length === 0}
        >
          {t('common.continue')}
        </Button>
      </div>
    </PageContainer>
  );
}