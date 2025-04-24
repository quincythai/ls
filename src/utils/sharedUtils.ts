import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type RentBurdenData = {
  name: string;
  burdened: number;
  severelyBurdened: number;
};

export function generateRentBurdenData(
  lowIncome: { burdened: number; severelyBurdened: number } = { burdened: 0, severelyBurdened: 0 },
  moderateIncome: { burdened: number; severelyBurdened: number } = { burdened: 0, severelyBurdened: 0 },
  middleIncome: { burdened: number; severelyBurdened: number } = { burdened: 0, severelyBurdened: 0 },
  upperIncome: { burdened: number; severelyBurdened: number } = { burdened: 0, severelyBurdened: 0 },
): RentBurdenData[] {
  return [
    { name: "Low Income", ...lowIncome },
    { name: "Moderate Income", ...moderateIncome },
    { name: "Middle Income", ...middleIncome },
    { name: "Upper Income", ...upperIncome },
  ];
}
