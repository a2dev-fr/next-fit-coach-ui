import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App.tsx';
import './i18n/config';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <div className="dark text-foreground bg-background min-h-screen">
        <App />
      </div>
    </NextUIProvider>
  </StrictMode>
);