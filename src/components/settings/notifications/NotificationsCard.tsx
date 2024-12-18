import React from 'react';
import { Card, CardHeader, CardBody, Switch } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

export default function NotificationsCard() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">{t('account.settings.notifications.title')}</h2>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-foreground">{t('account.settings.notifications.emailUpdates')}</p>
            <p className="text-sm text-foreground-500">
              {t('account.settings.notifications.description')}
            </p>
          </div>
          <Switch defaultSelected />
        </div>
      </CardBody>
    </Card>
  );
}