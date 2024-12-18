import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import EmailInput from './form/EmailInput';
import PasswordInput from './form/PasswordInput';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import SocialLoginButtons from './SocialLoginButtons';
import TermsAndPrivacy from './form/TermsAndPrivacy';
import { useSignup } from '../../hooks/useSignup';

export default function SignupForm() {
  const { t } = useTranslation();
  const {
    email,
    setEmail,
    password,
    setPassword,
    isVisible,
    toggleVisibility,
    emailError,
    passwordError,
    loading,
    error,
    handleSubmit,
    passwordStrength
  } = useSignup();

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">{t('auth.signup.title')}</h1>
        <p className="text-sm text-gray-400">
          {t('auth.signup.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <EmailInput
          value={email}
          onChange={setEmail}
          error={emailError}
        />

        <div className="space-y-2">
          <PasswordInput
            value={password}
            onChange={setPassword}
            error={passwordError}
            visible={isVisible}
            onVisibilityChange={toggleVisibility}
          />
          <PasswordStrengthIndicator strength={passwordStrength} />
        </div>

        {error && (
          <p className="text-danger text-sm text-center">{error}</p>
        )}

        <Button
          type="submit"
          color="primary"
          fullWidth
          size="lg"
          isLoading={loading}
        >
          {t('auth.signup.createAccount')}
        </Button>
      </form>

      <div className="relative">
        <Divider className="my-4" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-gray-400 text-sm">
          {t('auth.signup.or')}
        </span>
      </div>

      <SocialLoginButtons />

      <p className="text-center text-sm">
        {t('auth.signup.haveAccount')}{' '}
        <Link to="/login" className="text-primary hover:underline">
          {t('auth.signup.signIn')}
        </Link>
      </p>

      <TermsAndPrivacy />
    </div>
  );
}