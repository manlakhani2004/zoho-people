import { toast } from "sonner";
import { FormData } from "../types/onboarding";

export const Onboarding = async (onboardingData:FormData) => {
  const res = await fetch("http://localhost:5000/employee/create-employee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(onboardingData),
  });

  if (!res.status) {
    const error = await res.json();
    toast.error('onboarding failed');
    throw new Error(error.message || "onboarding failded");
  }

  return await  res.json();
};