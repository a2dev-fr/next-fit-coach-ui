import React from 'react';
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react';
import { Download, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAccountData } from '../../hooks/account/useAccountData';

interface DataSectionProps {
  onDeleteClick: () => void;
}

export default function DataSection({ onDeleteClick }: DataSectionProps) {
  const { t } = useTranslation();
  const { loading, downloadData } = useAccountData();

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">{t('account.data')}</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        <Button
          variant="flat"
          startContent={<Download className="w-4 h-4" />}
          onClick={downloadData}
          isLoading={loading}
          fullWidth
        >
          {t('account.downloadData')}
        </Button>
        <Button
          color="danger"
          variant="flat"
          startContent={<Trash2 className="w-4 h-4" />}
          onClick={onDeleteClick}
          fullWidth
        >
          {t('account.deleteAccount')}
        </Button>
      </CardBody>
    </Card>
  );
}