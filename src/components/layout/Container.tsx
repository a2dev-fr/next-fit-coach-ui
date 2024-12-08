import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({ 
  children, 
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className={cn(
      "w-full mx-auto px-4 sm:px-6 lg:px-8",
      "max-w-[1400px]",
      className
    )}>
      {children}
    </Component>
  );
}