import type { LightsData } from "../components/LightsCard/types";

export const useLightsData = (): LightsData => {
  // dummy data for now
  return {
    min: 2700,
    max: 5000,
    value: 4300,
    unit: "k",
  };
};
