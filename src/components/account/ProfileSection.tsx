import React from 'react';
import { Card, CardHeader, CardBody, Button, Input } from '@nextui-org/react';
import { Save } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/authStore';
import { useProfile } from '../../hooks/account/useProfile';

export default function ProfileSection() {
  const { t } = useTranslation();
  const { user } = useAuthStore();
  const { email, setEmail, name, setName, loading, updateProfile } = useProfile(user);

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">{t('account.profile')}</h1>
      </CardHeader>
      <CardBody className="space-y-4">
        <Input
          label={t('account.email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          label={t('account.name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-end">
          <Button
            color="primary"
            startContent={<Save className="w-4 h-4" />}
            onClick={updateProfile}
            isLoading={loading}
          >
            {t('common.save')}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}