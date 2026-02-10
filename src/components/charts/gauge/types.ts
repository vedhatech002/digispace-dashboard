export interface GaugeChartProps {
  value: number;
  min: number;
  max: number;
  unit?: string;

  /** Visual customization */
  activeColor?: string;
  inactiveColor?: string;

  /** Layout */
  height?: number;

  /** Animation */
  animated?: boolean;
}
