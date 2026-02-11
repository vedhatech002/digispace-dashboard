import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { BarChartProps } from "./types";

const BarChart = ({
  labels,
  values,
  height = 200,
  barColor = "#2EF2C5",
  hoverColor = "#34F5D0",
  unit = "",
  showTooltip = true,
}: BarChartProps) => {
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
            trigger: "item",
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            borderColor: "rgba(255,255,255,0.08)",
            borderWidth: 1,
            padding: [8, 12],
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
            formatter: (params: any) => {
              return `
                <div style="display:flex;flex-direction:column;">
                  <span style="opacity:0.7;font-size:11px;">
                    ${params.name}
                  </span>
                  <span style="font-weight:600;font-size:13px;">
                    ${params.value} ${unit}
                  </span>
                </div>
              `;
            },
          }
        : { show: false },

      grid: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 30,
      },

      xAxis: {
        type: "category",
        data: labels,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#9CA3AF",
          fontSize: 12,
          margin: 15,
        },
      },

      yAxis: {
        type: "value",
        show: false,
      },

      series: [
        {
          type: "bar",
          data: values,
          barWidth: "65%",
          itemStyle: {
            color: barColor,
            borderRadius: [6, 6, 6, 6],
          },
          emphasis: {
            itemStyle: {
              color: hoverColor,
              shadowBlur: 15,
              shadowColor: "rgba(46, 242, 197, 0.6)",
            },
          },
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
  }, [labels, values, barColor, hoverColor, unit, showTooltip]);

  return <div ref={chartRef} className="w-full" style={{ height }} />;
};

export default BarChart;
