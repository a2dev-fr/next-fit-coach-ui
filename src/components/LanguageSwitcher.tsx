import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import ReactCountryFlag from 'react-country-flag';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

interface Language {
  code: string;
  country: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', country: 'GB', name: 'English' },
  { code: 'fr', country: 'FR', name: 'Français' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('i18nextLng', languageCode);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          className="min-w-max px-2 h-unit-10 md:h-unit-8"
          endContent={<ChevronDown className="hidden md:block w-4 h-4" />}
        >
          <ReactCountryFlag
            countryCode={currentLang.country}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title={currentLang.name}
            className="rounded-sm md:mr-2"
          />
          <span className="hidden md:inline-block text-sm">{currentLang.name}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language selection"
        selectedKeys={[currentLanguage]}
        onAction={(key) => handleLanguageChange(key as string)}
        className="min-w-[120px]"
      >
        {languages.map((language) => (
          <DropdownItem
            key={language.code}
            className="data-[hover=true]:bg-primary/10"
            startContent={
              <ReactCountryFlag
                countryCode={language.country}
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                }}
                title={language.name}
                className={cn(
                  "rounded-sm",
                  currentLanguage === language.code ? "opacity-100" : "opacity-70"
                )}
              />
            }
          >
            <span className="ml-2">{language.name}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}