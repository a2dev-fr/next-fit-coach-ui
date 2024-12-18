import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { useAccountData } from '../../hooks/account/useAccountData';

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteAccountModal({ isOpen, onClose }: DeleteAccountModalProps) {
  const { t } = useTranslation();
  const { loading, deleteAccount } = useAccountData();

  const handleDelete = async () => {
    const success = await deleteAccount();
    if (success) {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{t('account.deleteConfirmTitle')}</ModalHeader>
        <ModalBody>
          <p>{t('account.deleteConfirmMessage')}</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            {t('common.cancel')}
          </Button>
          <Button
            color="danger"
            onPress={handleDelete}
            isLoading={loading}
          >
            {t('account.confirmDelete')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}