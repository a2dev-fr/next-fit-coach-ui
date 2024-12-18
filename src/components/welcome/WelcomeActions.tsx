import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody } from '@nextui-org/react';
import { AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/authStore';
import { useCredits } from '../../hooks/useCredits';
import CreditsDisplay from '../credits/CreditsDisplay';

export default function WelcomeActions() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuthStore();
  const { credits, loading } = useCredits();

  if (!user) {
    return (
      <Button
        size="lg"
        color="primary"
        variant="shadow"
        onClick={() => navigate('/login')}
        className="text-lg"
      >
        {t('navigation.login')}
      </Button>
    );
  }

  if (loading) {
    return (
      <Button
        size="lg"
        color="primary"
        variant="shadow"
        isLoading
        className="text-lg"
      >
        {t('common.loading')}
      </Button>
    );
  }

  return (
    <div className="space-y-4">
      {credits > 0 ? (
        <>
          <CreditsDisplay credits={credits} />
          <Button
            size="lg"
            color="primary"
            variant="shadow"
            onClick={() => navigate('/gender')}
            className="text-lg"
          >
            {t('welcome.cta')}
          </Button>
        </>
      ) : (
        <Card className="max-w-md mx-auto bg-warning-50/10 border-warning/20">
          <CardBody className="gap-2">
            <div className="flex items-center gap-2 text-warning">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>{t('credits.empty')}</p>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}