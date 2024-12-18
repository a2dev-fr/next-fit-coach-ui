import React from 'react';
import { Toaster } from 'sonner';

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster 
        position="bottom-right"
        closeButton
        theme="dark"
        richColors
        toastOptions={{
          classNames: {
            toast: "bg-background/80 backdrop-blur-lg border border-white/10",
            title: "text-foreground",
            description: "text-foreground-500",
            actionButton: "bg-primary",
            cancelButton: "bg-transparent",
          }
        }}
      />
    </>
  );
}