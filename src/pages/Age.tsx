import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';

export default function Age() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const ageRanges = [
    { key: 'under20', label: t('age.under20') },
    { key: '20to29', label: t('age.20to29') },
    { key: '30to39', label: t('age.30to39') },
    { key: '40plus', label: t('age.40plus') }
  ];

  return (
    <PageContainer currentStep={2} totalSteps={7}>
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('age.title')}
      </h1>
      <div className="space-y-4">
        {ageRanges.map((range) => (
          <Button
            key={range.key}
            fullWidth
            size="lg"
            variant="flat"
            className="h-16"
            onClick={() => navigate('/physical')}
          >
            {range.label}
          </Button>
        ))}
      </div>
    </PageContainer>
  );
}