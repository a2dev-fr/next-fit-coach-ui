import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-danger/10 border border-danger/20">
      <AlertCircle className="w-5 h-5 shrink-0 text-danger" />
      <p className="text-sm text-danger">{message}</p>
    </div>
  );
}