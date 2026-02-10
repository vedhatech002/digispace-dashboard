export interface CarbonSource {
  name: string;
  value: number;
  color: string;
}

export interface CarbonIntensityData {
  total: number;
  unit: string;
  sources: CarbonSource[];
}
