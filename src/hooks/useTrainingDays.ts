import { useState, useCallback } from 'react';

export function useTrainingDays() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = useCallback((day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  }, []);

  return {
    selectedDays,
    toggleDay,
    setSelectedDays
  };
}