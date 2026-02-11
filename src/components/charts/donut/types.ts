export interface DonutDataItem {
  value: number;
  name: string;
  color: string;
}

export interface DonutChartProps {
  data: DonutDataItem[];
  height?: number;

  innerRadius?: string;
  outerRadius?: string;

  showLabels?: boolean;
  showTooltip?: boolean;

  centerContent?: React.ReactNode;
}
