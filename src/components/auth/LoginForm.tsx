import { Link } from 'react-router-dom';
import { Button, Divider } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import EmailInput from './form/EmailInput';
import PasswordInput from './form/PasswordInput';
import SocialLoginButtons from './SocialLoginButtons';
import { useAuth } from '../../hooks/useAuth';

export default function LoginForm() {
  const { t } = useTranslation();
  const {
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    isVisible,
    toggleVisibility,
    emailError,
    passwordError,
    loading,
    error,
    handleSubmit
  } = useAuth();

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 bg-background/60 backdrop-blur-lg rounded-2xl shadow-lg space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">{t('auth.login.title')}</h1>
        <p className="text-sm text-gray-400">
          {t('auth.login.subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <EmailInput
          value={email}
          onChange={setEmail}
          error={emailError}
          label={t('auth.login.email')}
        />

        <div className="space-y-2">
          <PasswordInput
            value={password}
            onChange={setPassword}
            error={passwordError}
            visible={isVisible}
            onVisibilityChange={toggleVisibility}
            label={t('auth.login.password')}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-gray-400 text-primary focus:ring-primary"
              />
              <span>{t('auth.login.rememberMe')}</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-primary hover:underline"
            >
              {t('auth.login.forgotPassword')}
            </Link>
          </div>
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
          {t('auth.login.signIn')}
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
        {t('auth.login.noAccount')}{' '}
        <Link to="/signup" className="text-primary hover:underline">
          {t('auth.login.signUp')}
        </Link>
      </p>
    </div>
  );
}