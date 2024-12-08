export interface CreateWeekPlanRequest {
  gender: string;
  age: number;
  height: number;
  weight: number;
  training_days: string[];
  sport_relationship: string;
  main_objective: string;
  main_motivation: string;
  training_preference: string;
}

export interface Exercise {
  name: string;
  reps: number;
  sets: number;
  order: number;
  rest_between_series: string;
  advice: string;
}

export interface Day {
  day: string;
  name: string;
  exercises: Exercise[];
}

export interface CreateWeekPlanResponse {
  days: Day[];
}

export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail: ValidationError[];
}
