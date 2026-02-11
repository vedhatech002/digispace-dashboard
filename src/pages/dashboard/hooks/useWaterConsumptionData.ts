import type { WaterConsumptionData } from "../components/WaterConsumptionCard/types";

export const useWaterConsumptionData = (): WaterConsumptionData => {
  return {
    value: 8.42,
    unit: "m³",
    comparisonValue: 1.2,
    comparisonText: "less water used compare to last tuesday",
  };
};
