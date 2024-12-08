import React from 'react';
import { cn } from '../../utils/cn';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export default function Grid({ 
  children, 
  className,
  cols = 1,
  gap = 'md'
}: GridProps) {
  const colsConfig = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapConfig = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  return (
    <div className={cn(
      "grid",
      colsConfig[cols],
      gapConfig[gap],
      className
    )}>
      {children}
    </div>
  );
}