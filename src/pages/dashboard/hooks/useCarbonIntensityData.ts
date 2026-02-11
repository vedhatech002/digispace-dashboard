import type { CarbonIntensityData } from "../components/CarbonIntensityCard/types";

export const useCarbonIntensityData = (): CarbonIntensityData => {
  return {
    total: 95,
    unit: "gm CO₂/kWh",
    sources: [
      { value: 30, name: "Coal", color: "#A67C73" },
      { value: 20, name: "Hydro", color: "#F59E5F" },
      { value: 20, name: "Nuclear", color: "#B565D8" },
      { value: 10, name: "Wind", color: "#4DD4D8" },
      { value: 25, name: "Solar", color: "#FF6B7A" },
    ],
  };
};
