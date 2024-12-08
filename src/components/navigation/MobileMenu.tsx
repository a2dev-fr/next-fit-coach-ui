import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`md:hidden fixed left-0 right-0 transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}
    >
      {/* Blur Background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl backdrop-saturate-150" />
      
      {/* Content */}
      <div className="relative px-4 pt-2 pb-3 space-y-1">
        <NavLink
          to="/"
          onClick={onClose}
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive
                ? 'text-primary bg-primary/10'
                : 'text-foreground/90 hover:text-primary hover:bg-primary/10'
            }`
          }
        >
          {t('navigation.home')}
        </NavLink>
        <NavLink
          to="/about"
          onClick={onClose}
          className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive
                ? 'text-primary bg-primary/10'
                : 'text-foreground/90 hover:text-primary hover:bg-primary/10'
            }`
          }
        >
          {t('navigation.about')}
        </NavLink>
        <div className="flex items-center justify-between pt-2 px-3">
          <Button
            as={NavLink}
            to="/login"
            color="primary"
            variant="flat"
            className="flex-1 mr-2"
            onClick={onClose}
          >
            {t('navigation.login')}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}