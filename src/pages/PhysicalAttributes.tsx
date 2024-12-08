import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Slider } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import { useFitnessStore } from '../store/fitnessStore';

export default function PhysicalAttributes() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setHeight, setWeight } = useFitnessStore();
  const [height, setLocalHeight] = useState(170);
  const [weight, setLocalWeight] = useState(70);

  const handleContinue = () => {
    setHeight(height.toString());
    setWeight(weight.toString());
    navigate('/training-days');
  };

  return (
    <PageContainer currentStep={3} totalSteps={7}>
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('physical.title')}
      </h1>
      <div className="flex justify-around items-center gap-8 mb-8 h-[400px]">
        {/* Height Slider */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-sm text-gray-400">{t('physical.height')}</span>
          <div className="h-[300px] flex items-center">
            <Slider
              size="lg"
              orientation="vertical"
              step={1}
              minValue={140}
              maxValue={220}
              value={height}
              onChange={(value) => setLocalHeight(Number(value))}
              className="h-full"
              tooltipProps={{
                content: `${height} ${t('physical.cm')}`,
                placement: "right"
              }}
              classNames={{
                base: "h-full flex items-center",
                track: "h-full",
                filledTrack: "bg-gradient-to-t from-primary-600 to-primary-400",
                thumb: "left-1/2 -translate-x-1/2",
                mark: "hidden"
              }}
              aria-label={t('physical.height')}
            />
          </div>
          <span className="text-lg font-semibold">
            {height} {t('physical.cm')}
          </span>
        </div>

        {/* Weight Slider */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-sm text-gray-400">{t('physical.weight')}</span>
          <div className="h-[300px] flex items-center">
            <Slider
              size="lg"
              orientation="vertical"
              step={1}
              minValue={40}
              maxValue={150}
              value={weight}
              onChange={(value) => setLocalWeight(Number(value))}
              className="h-full"
              tooltipProps={{
                content: `${weight} ${t('physical.kg')}`,
                placement: "right"
              }}
              classNames={{
                base: "h-full flex items-center",
                track: "h-full",
                filledTrack: "bg-gradient-to-t from-primary-600 to-primary-400",
                thumb: "left-1/2 -translate-x-1/2",
                mark: "hidden"
              }}
              aria-label={t('physical.weight')}
            />
          </div>
          <span className="text-lg font-semibold">
            {weight} {t('physical.kg')}
          </span>
        </div>
      </div>

      <Button
        fullWidth
        size="lg"
        color="primary"
        onClick={handleContinue}
      >
        {t('common.continue')}
      </Button>
    </PageContainer>
  );
}