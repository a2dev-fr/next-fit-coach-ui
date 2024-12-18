import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { cn } from '../../utils/cn';

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function LegalSection({ title, children, className }: LegalSectionProps) {
  return (
    <Card className={cn("mb-6", className)}>
      <CardBody>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="space-y-4 text-foreground-600">
          {children}
        </div>
      </CardBody>
    </Card>
  );
}