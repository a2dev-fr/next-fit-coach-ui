import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: 'dark',
      defaultExtendTheme: 'dark',
      layout: {
        spacingUnit: 4,
        disabledOpacity: 0.5,
        dividerWeight: '1px',
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem',
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem',
        },
      },
      themes: {
        dark: {
          extend: 'dark',
          colors: {
            background: '#000000',
            foreground: '#ECEDEE',
            primary: {
              50: '#E6F1FE',
              100: '#CCE4FD',
              200: '#99C9FB',
              300: '#66AEF9',
              400: '#3393F7',
              500: '#0070F3',
              600: '#005CC4',
              700: '#004493',
              800: '#002E62',
              900: '#001731',
              DEFAULT: '#0070F3',
              foreground: '#FFFFFF',
            },
            focus: '#0070F3',
          },
          layout: {
            hoverOpacity: 0.8,
            boxShadow: {
              small: '0 0 4px 0 rgb(0 0 0 / 0.1)',
              medium: '0 0 6px 0 rgb(0 0 0 / 0.1)',
              large: '0 0 8px 0 rgb(0 0 0 / 0.1)',
            },
          },
        },
      },
    }),
  ],
};