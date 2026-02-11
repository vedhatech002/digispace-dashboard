export interface LineChartProps {
  labels: string[];
  values: number[];

  height?: number;
  lineColor?: string;
  areaGradient?: boolean;
  showTooltip?: boolean;
}
