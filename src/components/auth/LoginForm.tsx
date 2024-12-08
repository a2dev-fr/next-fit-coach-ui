import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Checkbox, Card, CardBody } from '@nextui-org/react';
import { Mail, Lock, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { validateEmail } from '../../utils/validation';

export default function LoginForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validate inputs
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    }

    if (isValid) {
      await login(email, password, remember);
    }
  };

  return (
    <Card className="max-w-md w-full">
      <CardBody className="p-6">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{t('login.title')}</h1>
            <p className="text-sm text-gray-400 mt-2">
              {t('login.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label={t('login.email')}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={emailError}
              startContent={<Mail className="w-4 h-4 text-gray-400" />}
              isInvalid={!!emailError}
            />

            <Input
              type="password"
              label={t('login.password')}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={passwordError}
              startContent={<Lock className="w-4 h-4 text-gray-400" />}
              isInvalid={!!passwordError}
            />

            <div className="flex items-center justify-between">
              <Checkbox
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              >
                {t('login.rememberMe')}
              </Checkbox>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                {t('login.forgotPassword')}
              </Link>
            </div>

            {error && (
              <p className="text-danger text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              color="primary"
              fullWidth
              size="lg"
              disabled={loading}
            >
              {loading ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                t('login.signIn')
              )}
            </Button>
          </form>

          <p className="text-center text-sm">
            {t('login.noAccount')}{' '}
            <Link to="/signup" className="text-primary hover:underline">
              {t('login.signUp')}
            </Link>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}