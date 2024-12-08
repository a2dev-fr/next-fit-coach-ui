import { CreateWeekPlanRequest, CreateWeekPlanResponse } from '../types/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export class ApiClient {
  static async createWeekPlan(request: CreateWeekPlanRequest): Promise<CreateWeekPlanResponse> {
    const response = await fetch(`${API_URL}/create-week-plan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail?.[0]?.msg || 'Failed to create workout plan');
    }

    return response.json();
  }
}
