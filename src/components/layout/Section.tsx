import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn(
      "py-6 sm:py-8 md:py-12",
      className
    )}>
      {children}
    </section>
  );
}