import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/authStore';
import LanguageSwitcher from '../LanguageSwitcher';
import UserMenu from './UserMenu';

export default function NavLinks() {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-foreground/90 hover:text-primary transition-colors px-2 md:px-3 py-2 rounded-md text-sm md:text-base ${
            isActive ? 'text-primary font-medium' : ''
          }`
        }
      >
        {t('navigation.home')}
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-foreground/90 hover:text-primary transition-colors px-2 md:px-3 py-2 rounded-md text-sm md:text-base ${
            isActive ? 'text-primary font-medium' : ''
          }`
        }
      >
        {t('navigation.about')}
      </NavLink>
      
      <LanguageSwitcher />
      
      {user ? (
        <UserMenu />
      ) : (
        <Button
          as={NavLink}
          to="/login"
          variant="light"
          color="primary"
          size="sm"
          className="ml-2 md:ml-4 text-sm md:text-base"
        >
          {t('navigation.login')}
        </Button>
      )}
    </div>
  );
}