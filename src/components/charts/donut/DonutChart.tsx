// React and related imports
import { useEffect, useRef } from "react";
// Thirs-party libraries
import * as echarts from "echarts";
// types
import type { DonutChartProps } from "./types";

const DonutChart = ({
  data,
  height = 250,
  innerRadius = "38%",
  outerRadius = "68%",
  showLabels = true,
  showTooltip = false,
  centerContent,
}: DonutChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = chartInstanceRef.current ?? echarts.init(chartRef.current);

    chartInstanceRef.current = chart;

    const option: echarts.EChartsOption = {
      backgroundColor: "transparent",
      animation: true,
      animationDuration: 1500,
      animationEasing: "elasticOut",

      tooltip: showTooltip
        ? {
            trigger: "item",
            formatter: "{b}: {c}% ({d}%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderColor: "#333",
            textStyle: {
              color: "#fff",
            },
          }
        : { show: false },

      series: [
        {
          type: "pie",
          radius: [innerRadius, outerRadius],
          center: ["50%", "48%"],
          avoidLabelOverlap: false,

          label: showLabels
            ? {
                show: true,
                position: "outside",
                formatter: (params: any) => `${params.value}%\n${params.name}`,
                fontSize: 8,
                fontWeight: "bolder",
                color: "#1a1a1a",
                backgroundColor: "#fff",
                padding: [4, 12],
                borderRadius: 16,
                lineHeight: 10,
              }
            : { show: false },

          labelLine: showLabels
            ? {
                show: true,
                length: -20,
                length2: -5,
                lineStyle: { color: "#4b5563" },
              }
            : { show: false },

          emphasis: {
            scale: true,
          },

          data: data.map((item) => ({
            value: item.value,
            name: item.name,
            itemStyle: { color: item.color },
          })),
        },
      ],
    };

    chart.setOption(option);

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
      chartInstanceRef.current = null;
    };
  }, [data, innerRadius, outerRadius, showLabels, showTooltip]);

  return (
    <div className="relative w-full" style={{ height }}>
      <div ref={chartRef} className="w-full h-full" />

      {centerContent && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {centerContent}
        </div>
      )}
    </div>
  );
};

export default DonutChart;
