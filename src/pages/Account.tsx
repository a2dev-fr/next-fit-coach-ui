import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/react';
import { Download, Trash2, Save } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/authStore';
import { supabase } from '../lib/supabase';
import { useToast } from '../hooks/useToast';
import PageContainer from '../components/PageContainer';

export default function Account() {
  const { t } = useTranslation();
  const { user, reset } = useAuthStore();
  const { showError, showSuccess } = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(user?.email || '');
  const [name, setName] = useState(user?.user_metadata?.full_name || '');

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      
      const { error } = await supabase.auth.updateUser({
        email,
        data: { full_name: name }
      });

      if (error) throw error;

      showSuccess(t('account.profile.updated'));
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'account.updateProfile');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);
      
      const { error } = await supabase.rpc('delete_user');
      
      if (error) throw error;

      await supabase.auth.signOut();
      reset();
      showSuccess(t('account.data.deleteConfirm.success'));
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'account.delete');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadData = async () => {
    try {
      setLoading(true);
      
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) throw error;

      const userData = {
        profile: user,
        // Add other user data here
      };

      const blob = new Blob([JSON.stringify(userData, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `user-data-${new Date().toISOString()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showSuccess(t('account.data.downloaded'));
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'account.downloadData');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">{t('account.profile.title')}</h1>
          </CardHeader>
          <CardBody className="space-y-4">
            <Input
              label={t('account.profile.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <Input
              label={t('account.profile.name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex justify-end">
              <Button
                color="primary"
                startContent={<Save className="w-4 h-4" />}
                onClick={handleUpdateProfile}
                isLoading={loading}
              >
                {t('common.save')}
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">{t('account.data.title')}</h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <Button
              variant="flat"
              startContent={<Download className="w-4 h-4" />}
              onClick={handleDownloadData}
              isLoading={loading}
              fullWidth
            >
              {t('account.data.download')}
            </Button>
            <Button
              color="danger"
              variant="flat"
              startContent={<Trash2 className="w-4 h-4" />}
              onClick={onOpen}
              fullWidth
            >
              {t('account.data.delete')}
            </Button>
          </CardBody>
        </Card>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>{t('account.data.deleteConfirm.title')}</ModalHeader>
            <ModalBody>
              <p>{t('account.data.deleteConfirm.message')}</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                {t('common.cancel')}
              </Button>
              <Button
                color="danger"
                onPress={handleDeleteAccount}
                isLoading={loading}
              >
                {t('account.data.deleteConfirm.confirm')}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </PageContainer>
  );
}