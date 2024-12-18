import React from 'react';
import DayCard from './DayCard';

interface DayGridProps {
  days: Array<{ key: string; label: string }>;
  selectedDays: string[];
  onToggleDay: (day: string) => void;
}

export default function DayGrid({ days, selectedDays, onToggleDay }: DayGridProps) {
  return (
    <div className="space-y-2">
      {days.map((day) => (
        <DayCard
          key={day.key}
          day={day.key}
          label={day.label}
          isSelected={selectedDays.includes(day.key)}
          onClick={() => onToggleDay(day.key)}
        />
      ))}
    </div>
  );
}