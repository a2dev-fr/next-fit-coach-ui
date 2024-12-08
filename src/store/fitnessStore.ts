import { create } from 'zustand';

interface FitnessState {
  gender: string | null;
  age: string;
  height: string;
  weight: string;
  trainingDays: string[];
  level: string;
  objective: string;
  motivation: string;
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setTrainingDays: (days: string[]) => void;
  setLevel: (level: string) => void;
  setObjective: (objective: string) => void;
  setMotivation: (motivation: string) => void;
}

export const useFitnessStore = create<FitnessState>((set) => ({
  gender: null,
  age: '',
  height: '',
  weight: '',
  trainingDays: [],
  level: '',
  objective: '',
  motivation: '',
  setGender: (gender) => set({ gender }),
  setAge: (age) => set({ age }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
  setTrainingDays: (trainingDays) => set({ trainingDays }),
  setLevel: (level) => set({ level }),
  setObjective: (objective) => set({ objective }),
  setMotivation: (motivation) => set({ motivation }),
}));