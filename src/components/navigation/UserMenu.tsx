import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Settings, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/authStore';
import { supabase } from '../../lib/supabase';
import { useToast } from '../../hooks/useToast';

export default function UserMenu() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, reset } = useAuthStore();
  const { showError, showSuccess } = useToast();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      reset();
      showSuccess(t('auth.signedOut'));
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        showError(error, 'auth.signOut');
      }
    }
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          as="button"
          className="transition-transform"
          color="primary"
          name={user?.email?.[0].toUpperCase()}
          size="sm"
          src={user?.user_metadata?.avatar_url}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user?.email}</p>
        </DropdownItem>
        <DropdownItem
          key="account"
          startContent={<User className="w-4 h-4" />}
          onPress={() => navigate('/account')}
        >
          {t('navigation.account')}
        </DropdownItem>
        <DropdownItem
          key="settings"
          startContent={<Settings className="w-4 h-4" />}
          onPress={() => navigate('/settings')}
        >
          {t('navigation.settings')}
        </DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          startContent={<LogOut className="w-4 h-4" />}
          onPress={handleSignOut}
        >
          {t('navigation.signOut')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}