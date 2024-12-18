import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function TermsAndPrivacy() {
  const { t } = useTranslation();

  return (
    <p className="text-center text-xs text-gray-400">
      {t('auth.signup.terms.agreement')}{' '}
      <Link to="/terms" className="text-primary hover:underline">
        {t('auth.signup.terms.terms')}
      </Link>{' '}
      {t('auth.signup.terms.and')}{' '}
      <Link to="/privacy" className="text-primary hover:underline">
        {t('auth.signup.terms.privacy')}
      </Link>
    </p>
  );
}