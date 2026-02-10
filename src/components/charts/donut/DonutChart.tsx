import { useEffect, useRef } from "react";
import * as echarts from "echarts";
// import { Menu } from "lucide-react";

interface DataItem {
  value: number;
  name: string;
  itemStyle: { color: string };
}

const CarbonIntensityChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const data: DataItem[] = [
    { value: 30, name: "Coal", itemStyle: { color: "#A67C73" } },
    { value: 20, name: "Hydro", itemStyle: { color: "#F59E5F" } },
    { value: 20, name: "Nuclear", itemStyle: { color: "#B565D8" } },
    { value: 10, name: "Wind", itemStyle: { color: "#4DD4D8" } },
    { value: 25, name: "Solar", itemStyle: { color: "#FF6B7A" } },
  ];

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}% ({d}%)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          type: "pie",
          radius: ["38%", "68%"],
          center: ["50%", "48%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
            formatter: (params: any) => {
              return `${params.value}%\n${params.name}`;
            },
            fontSize: 8,
            fontWeight: "bolder",
            color: "#1a1a1a",
            backgroundColor: "#fff",
            padding: [6, 12],
            borderRadius: 18,
            lineHeight: 10,
          },
          labelLine: {
            show: true,
            length: -20,
            length2: -5,
            lineStyle: {
              color: "#4b5563",
            },
          },
          emphasis: {
            // scale: false,
            // scaleSize: 20,
            // itemStyle: {
            //   shadowBlur: 10,
            //   shadowOffsetX: 1,
            //   shadowColor: "rgba(0, 0, 0, 0.5)",
            // },
          },
          data: data,
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <div className="w-full">
      <div className="relative flex justify-center items-center">
        <div ref={chartRef} className="w-full" style={{ height: 250 }} />

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          style={{ top: "calc(50% - 15px)" }}
        >
          <div className="bg-white px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-gray-900">95gm</span>
              <span className="text-xs text-gray-600">CO2/kWh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonIntensityChart;
