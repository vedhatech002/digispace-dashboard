export interface BarChartProps {
  labels: string[];
  values: number[];

  height?: number;
  barColor?: string;
  hoverColor?: string;

  unit?: string;
  showTooltip?: boolean;
}
