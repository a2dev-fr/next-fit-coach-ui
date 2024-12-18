import React from 'react';
import { Input } from '@nextui-org/react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  visible: boolean;
  onVisibilityChange: () => void;
  label?: string;
}

export default function PasswordInput({
  value,
  onChange,
  error,
  visible,
  onVisibilityChange,
  label
}: PasswordInputProps) {
  const { t } = useTranslation();

  return (
    <Input
      type={visible ? "text" : "password"}
      label={label || t('auth.signup.password')}
      placeholder={t('auth.signup.passwordPlaceholder')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      errorMessage={error}
      startContent={<Lock className="w-4 h-4 text-gray-400" />}
      endContent={
        <button
          type="button"
          onClick={onVisibilityChange}
          className="focus:outline-none"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeOff className="w-4 h-4 text-gray-400" />
          ) : (
            <Eye className="w-4 h-4 text-gray-400" />
          )}
        </button>
      }
      isInvalid={!!error}
      isRequired
      autoComplete="current-password"
      classNames={{
        input: "text-base",
        inputWrapper: "h-12"
      }}
    />
  );
}