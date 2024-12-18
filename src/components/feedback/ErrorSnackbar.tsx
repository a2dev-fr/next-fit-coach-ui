import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { AlertCircle, WifiOff, ShieldAlert, ServerCrash } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ErrorType } from '../../types/error';

interface ErrorSnackbarProps {
  message: string;
  type: ErrorType;
  details?: string;
}

export default function ErrorSnackbar({ message, type, details }: ErrorSnackbarProps) {
  const { t } = useTranslation();

  const IconComponent = {
    network: WifiOff,
    auth: ShieldAlert,
    server: ServerCrash,
    unknown: AlertCircle
  }[type];

  const colorMap = {
    network: 'text-warning',
    auth: 'text-danger',
    server: 'text-danger',
    unknown: 'text-danger'
  };

  return (
    <div className="flex items-start gap-3">
      <div className={`shrink-0 ${colorMap[type]}`}>
        <IconComponent className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground">{message}</p>
        {details && (
          <p className="text-xs text-foreground-500 mt-1">{details}</p>
        )}
      </div>
    </div>
  );
}