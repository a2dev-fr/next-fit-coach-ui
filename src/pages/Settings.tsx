import React from 'react';
import PageContainer from '../components/PageContainer';
import SettingsHeader from '../components/settings/SettingsHeader';
import CreditsCard from '../components/settings/credits/CreditsCard';
import NotificationsCard from '../components/settings/notifications/NotificationsCard';

export default function Settings() {
  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto space-y-6">
        <SettingsHeader />
        <CreditsCard />
        <NotificationsCard />
      </div>
    </PageContainer>
  );
}