import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Select, SelectItem } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import { useFitnessStore } from '../store/fitnessStore';

export default function Preferences() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setLevel, setObjective, setMotivation } = useFitnessStore();
  const [level, setLocalLevel] = useState('');
  const [objective, setLocalObjective] = useState('');
  const [motivation, setLocalMotivation] = useState('');

  const levels = [
    { value: 'beginner', label: t('preferences.levels.beginner') },
    { value: 'amateur', label: t('preferences.levels.amateur') },
    { value: 'enthusiast', label: t('preferences.levels.enthusiast') },
    { value: 'expert', label: t('preferences.levels.expert') }
  ];

  const objectives = [
    { value: 'weightLoss', label: t('preferences.objectives.weightLoss') },
    { value: 'muscleGain', label: t('preferences.objectives.muscleGain') },
    { value: 'stayFit', label: t('preferences.objectives.stayFit') },
    { value: 'performance', label: t('preferences.objectives.performance') }
  ];

  const motivations = [
    { value: 'health', label: t('preferences.motivations.health') },
    { value: 'aesthetic', label: t('preferences.motivations.aesthetic') },
    { value: 'stress', label: t('preferences.motivations.stress') },
    { value: 'competition', label: t('preferences.motivations.competition') }
  ];

  const handleContinue = () => {
    setLevel(level);
    setObjective(objective);
    setMotivation(motivation);
    navigate('/review');
  };

  const isComplete = level && objective && motivation;

  return (
    <PageContainer currentStep={5} totalSteps={7}>
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('preferences.title')}
      </h1>
      <div className="space-y-6">
        <Select
          label={t('preferences.levelLabel')}
          placeholder={t('preferences.levelPlaceholder')}
          selectedKeys={level ? [level] : []}
          onChange={(e) => setLocalLevel(e.target.value)}
        >
          {levels.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        <Select
          label={t('preferences.objectiveLabel')}
          placeholder={t('preferences.objectivePlaceholder')}
          selectedKeys={objective ? [objective] : []}
          onChange={(e) => setLocalObjective(e.target.value)}
        >
          {objectives.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        <Select
          label={t('preferences.motivationLabel')}
          placeholder={t('preferences.motivationPlaceholder')}
          selectedKeys={motivation ? [motivation] : []}
          onChange={(e) => setLocalMotivation(e.target.value)}
        >
          {motivations.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        <Button
          fullWidth
          size="lg"
          color="primary"
          onClick={handleContinue}
          isDisabled={!isComplete}
        >
          {t('common.continue')}
        </Button>
      </div>
    </PageContainer>
  );
}