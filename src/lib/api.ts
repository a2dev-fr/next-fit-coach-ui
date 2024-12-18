import { createClient } from "@supabase/supabase-js";
import { CreateWeekPlanRequest, CreateWeekPlanResponse } from "../types/api";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class ApiClient {
  static async createWeekPlan(
    request: CreateWeekPlanRequest,
  ): Promise<CreateWeekPlanResponse> {
    const { data, error } = await supabase.functions.invoke("create_week_plan", {
      body: request,
    });

    if (error) {
      throw new Error(error.message || "Failed to create workout plan");
    }

    if (!data) {
      throw new Error("No data received from the server");
    }

    return data as CreateWeekPlanResponse;
  }
}
