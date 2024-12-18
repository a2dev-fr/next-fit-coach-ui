import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import { useFitnessStore } from '../store/fitnessStore';

export default function Gender() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const setGender = useFitnessStore((state) => state.setGender);

  const handleGenderSelect = (gender: string) => {
    setGender(gender);
    navigate('/age');
  };

  return (
    <PageContainer currentStep={1} totalSteps={7}>
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('gender.title')}
      </h1>
      <div className="space-y-4">
        <Button
          fullWidth
          size="lg"
          variant="flat"
          className="h-20 group"
          onClick={() => handleGenderSelect('male')}
        >
          <span className="text-2xl mr-3 transition-transform group-hover:scale-110" aria-hidden="true">
            ♂
          </span>
          {t('gender.male')}
        </Button>
        <Button
          fullWidth
          size="lg"
          variant="flat"
          className="h-20 group"
          onClick={() => handleGenderSelect('female')}
        >
          <span className="text-2xl mr-3 transition-transform group-hover:scale-110" aria-hidden="true">
            ♀
          </span>
          {t('gender.female')}
        </Button>
      </div>
    </PageContainer>
  );
}