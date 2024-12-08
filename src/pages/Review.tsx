import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { ClipboardCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer';
import { useFitnessStore } from '../store/fitnessStore';

export default function Review() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const userInfo = useFitnessStore((state) => ({
    gender: state.gender,
    age: state.age,
    height: state.height,
    weight: state.weight,
    trainingDays: state.trainingDays,
    level: state.level,
    objective: state.objective,
    motivation: state.motivation,
  }));

  return (
    <PageContainer currentStep={6} totalSteps={7}>
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('review.title')}
      </h1>
      
      <Card className="mb-6">
        <CardHeader className="flex gap-3">
          <ClipboardCheck className="w-6 h-6 text-primary" />
          <div className="flex flex-col">
            <p className="text-md">{t('review.summary')}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">{t('review.profile')}</p>
              <p>
                {userInfo.gender === 'homme' ? t('gender.male') : t('gender.female')}, {userInfo.age}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">{t('review.measurements')}</p>
              <p>
                {userInfo.height} {t('physical.cm')}, {userInfo.weight} {t('physical.kg')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">{t('review.trainingDays')}</p>
              <p>
                {userInfo.trainingDays.map(day => t(`days.${day}`)).join(', ')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">{t('review.preferences')}</p>
              <p>
                {t(`preferences.levels.${userInfo.level}`)} - {t(`preferences.objectives.${userInfo.objective}`)}
              </p>
              <p>
                {t('review.motivation')}: {t(`preferences.motivations.${userInfo.motivation}`)}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="flex gap-4">
        <Button
          fullWidth
          size="lg"
          variant="flat"
          onClick={() => navigate(-1)}
        >
          {t('common.edit')}
        </Button>
        <Button
          fullWidth
          size="lg"
          color="primary"
          onClick={() => navigate('/plan')}
        >
          {t('review.generatePlan')}
        </Button>
      </div>
    </PageContainer>
  );
}