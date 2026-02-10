// React and related imports
import { useEffect, useRef } from "react";
// third-party libraries
import * as echarts from "echarts";
// types
import type { GaugeChartProps } from "./types";

const GaugeChart = ({
  value,
  min,
  max,
  unit = "",
  activeColor = "#2dd4bf",
  inactiveColor = "#94a3b8",
  height = 200,
  animated = true,
}: GaugeChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = chartInstanceRef.current ?? echarts.init(chartRef.current);

    chartInstanceRef.current = chart;

    const normalizedValue = (value - min) / (max - min);

    const option: echarts.EChartsOption = {
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          min: min,
          max: max,
          splitNumber: 10,
          radius: "85%",
          center: ["50%", "70%"],
          animationDuration: 1200,
          animationEasing: "elasticOut",
          axisLine: {
            lineStyle: {
              width: 14,
              color: [
                [normalizedValue, "#2dd4bf"],
                [1, "#94a3b8"],
              ],
            },
          },
          pointer: {
            icon: "circle",
            length: "20%",
            width: 24,
            offsetCenter: [0, "-82%"],
            itemStyle: {
              color: "#fff",
              borderColor: "#fff",
              borderWidth: 3,
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.3)",
            },
          },
          axisTick: {
            distance: -38,
            length: 8,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 32,
            fontWeight: "bold",
            offsetCenter: [0, "-15%"],
            color: "#2dd4bf",
            formatter: (value: number) => {
              return `${value}${unit}`;
            },
          },
          data: [
            {
              value: value,
            },
          ],
        },
      ],
    };

    chart.setOption(option);

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
      chartInstanceRef.current = null;
    };
  }, [value, min, max, unit, activeColor, inactiveColor, animated]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={chartRef} className="w-full" style={{ height }} />

      {/* Min / Max labels */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8">
        <span className="text-[var(--text-muted)] text-sm">
          {min}
          {unit}
        </span>
        <span className="text-[var(--text-muted)] text-sm">
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
};

export default GaugeChart;
