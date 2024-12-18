import React from 'react';
import { Button } from '@nextui-org/react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

interface DayCardProps {
  day: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function DayCard({ day, label, isSelected, onClick }: DayCardProps) {
  return (
    <Button
      variant={isSelected ? "flat" : "bordered"}
      onPress={onClick}
      className={cn(
        "w-full h-14 justify-start px-4",
        "transition-all duration-200",
        isSelected && "bg-primary/10 border-primary"
      )}
      startContent={
        isSelected && (
          <Check className="w-4 h-4 text-primary shrink-0" />
        )
      }
    >
      <span className="flex-grow text-left">{label}</span>
    </Button>
  );
}