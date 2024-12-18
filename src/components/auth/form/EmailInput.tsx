import { Input } from '@nextui-org/react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
}

export default function EmailInput({ value, onChange, error, label }: EmailInputProps) {
  const { t } = useTranslation();

  return (
    <Input
      type="email"
      label={label || t('auth.signup.email')}
      placeholder={t('auth.signup.emailPlaceholder')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      errorMessage={error}
      startContent={<Mail className="w-4 h-4 text-gray-400" />}
      isInvalid={!!error}
      isRequired
      autoComplete="email"
      classNames={{
        input: "text-base",
        inputWrapper: "h-12"
      }}
    />
  );
}