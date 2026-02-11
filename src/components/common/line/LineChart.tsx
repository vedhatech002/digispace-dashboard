// React and related imports
import { useEffect, useRef } from "react";
// third-party libraries
import * as echarts from "echarts";
// types
import type { LineChartProps } from "./types";

const LineChart = ({
  labels,
  values,
  height = 220,
  lineColor = "#2EF2C5",
  areaGradient = true,
  showTooltip = true,
}: LineChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = chartInstanceRef.current ?? echarts.init(chartRef.current);

    chartInstanceRef.current = chart;

    const option: echarts.EChartsOption = {
      backgroundColor: "transparent",

      tooltip: showTooltip
        ? {
            trigger: "axis",
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            borderColor: "rgba(255,255,255,0.08)",
            borderWidth: 1,
            padding: [8, 12],
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          }
        : { show: false },

      grid: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 30,
      },

      xAxis: {
        type: "category",
        data: labels,
        boundaryGap: false,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#9CA3AF",
          fontSize: 8,
          margin: 15,
        },
      },

      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          show: true,
          color: "#9CA3AF",
          fontSize: 8,
          fontWeight: "bold",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.08)",
          },
        },
      },

      series: [
        {
          type: "line",
          data: values,
          smooth: true,
          symbol: "circle",
          symbolSize: 8,
          showSymbol: false,
          lineStyle: {
            color: lineColor,
            width: 3,
          },
          itemStyle: {
            color: lineColor,
            borderColor: "#0f172a",
            borderWidth: 2,
          },
          emphasis: {
            focus: "series",
            itemStyle: {
              borderWidth: 3,
            },
          },
          areaStyle: areaGradient
            ? {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(46, 242, 197, 0.4)",
                  },
                  {
                    offset: 1,
                    color: "rgba(46, 242, 197, 0)",
                  },
                ]),
              }
            : undefined,
        },
      ],

      animationDuration: 1000,
      animationEasing: "cubicOut",
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
  }, [labels, values, lineColor, areaGradient, showTooltip]);

  return <div ref={chartRef} className="w-full" style={{ height }} />;
};

export default LineChart;
