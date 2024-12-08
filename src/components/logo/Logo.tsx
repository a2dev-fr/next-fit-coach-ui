import React from 'react';
import { cn } from '../../utils/cn';
import LogoIcon from './LogoIcon';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto md:h-20'
  };

  return (
    <div className={cn("inline-flex items-center", className)}>
      <LogoIcon className={cn(
        sizeClasses[size],
        "text-primary hover:scale-105"
      )} />
      <span className="sr-only">NextFit Coach</span>
    </div>
  );
}