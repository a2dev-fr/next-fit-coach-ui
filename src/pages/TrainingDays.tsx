import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Chip } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import { useFitnessStore } from '../store/fitnessStore';

export default function TrainingDays() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setTrainingDays } = useFitnessStore();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  
  const days = [
    { key: 'monday', label: t('days.monday') },
    { key: 'tuesday', label: t('days.tuesday') },
    { key: 'wednesday', label: t('days.wednesday') },
    { key: 'thursday', label: t('days.thursday') },
    { key: 'friday', label: t('days.friday') },
    { key: 'saturday', label: t('days.saturday') },
    { key: 'sunday', label: t('days.sunday') }
  ];

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleContinue = () => {
    setTrainingDays(selectedDays);
    navigate('/preferences');
  };

  return (
    <PageContainer currentStep={4} totalSteps={7}>
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('trainingDays.title')}
      </h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {days.map((day) => (
          <Chip
            key={day.key}
            variant="flat"
            className="cursor-pointer"
            color={selectedDays.includes(day.key) ? "primary" : "default"}
            onClick={() => toggleDay(day.key)}
          >
            {day.label}
          </Chip>
        ))}
      </div>
      <Button
        fullWidth
        size="lg"
        color="primary"
        onClick={handleContinue}
        isDisabled={selectedDays.length === 0}
      >
        {t('common.continue')}
      </Button>
    </PageContainer>
  );
}