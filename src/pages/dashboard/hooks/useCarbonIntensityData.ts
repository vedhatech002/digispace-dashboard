// import { CarbonIntensityData } from "./types";

import type { CarbonIntensityData } from "../components/CarbonIntensityCard/types";

export const useCarbonIntensityData = (): CarbonIntensityData => {
  return {
    total: 95,
    unit: "gm CO₂/kWh",
    sources: [
      { name: "Coal", value: 30, color: "#8B5A4E" },
      { name: "Hydro", value: 20, color: "#F4A261" },
      { name: "Nuclear", value: 20, color: "#9B5DE5" },
      { name: "Wind", value: 15, color: "#2EF2C5" },
      { name: "Solar", value: 15, color: "#F94144" },
    ],
  };
};
