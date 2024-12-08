import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { User2, Users } from 'lucide-react';
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
          className="h-20"
          onClick={() => handleGenderSelect('Homme')}
        >
          <User2 className="w-6 h-6 mr-2" />
          {t('gender.male')}
        </Button>
        <Button
          fullWidth
          size="lg"
          variant="flat"
          className="h-20"
          onClick={() => handleGenderSelect('Femme')}
        >
          <Users className="w-6 h-6 mr-2" />
          {t('gender.female')}
        </Button>
      </div>
    </PageContainer>
  );
}