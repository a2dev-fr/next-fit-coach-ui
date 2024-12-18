import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { AlertCircle, WifiOff, ShieldAlert, ServerCrash, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ErrorInfo } from '../../types/error';
import { getErrorInfo } from '../../utils/errors';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  error: Error | null;
  onRetry?: () => void;
}

export default function ErrorModal({ isOpen, onClose, error, onRetry }: ErrorModalProps) {
  const { t } = useTranslation();
  const errorInfo: ErrorInfo = error ? getErrorInfo(error) : { 
    title: '', 
    message: '', 
    type: 'unknown' 
  };

  const IconComponent = {
    network: WifiOff,
    auth: ShieldAlert,
    server: ServerCrash,
    unknown: AlertCircle
  }[errorInfo.type];

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="sm"
      classNames={{
        base: "bg-background/80 backdrop-blur-sm",
        header: "border-b border-white/10",
        body: "py-6",
        footer: "border-t border-white/10"
      }}
    >
      <ModalContent>
        <ModalHeader className="flex gap-2 items-center">
          <IconComponent className="w-5 h-5 text-danger" />
          <span>{errorInfo.title}</span>
        </ModalHeader>
        <ModalBody>
          <p className="text-foreground/80">{errorInfo.message}</p>
          {errorInfo.details && (
            <p className="text-sm text-foreground/60 mt-2">{errorInfo.details}</p>
          )}
        </ModalBody>
        <ModalFooter>
          {onRetry && (
            <Button
              variant="light"
              onPress={onRetry}
              startContent={<RefreshCw className="w-4 h-4" />}
            >
              {t('errors.retry')}
            </Button>
          )}
          <Button 
            color="primary" 
            onPress={onClose}
          >
            {t('errors.close')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}