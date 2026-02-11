// components
import Card from "../../../../components/common/card/Card";
import CardHeader from "../../../../components/common/card/CardHeader";
import IconButton from "../../../../components/common/iconButton/IconButton";
import Badge from "../../../../components/common/badge/Badge";
import DonutChart from "../../../../components/charts/donut/DonutChart";

// Assets
import AirIcon from "../../../../assets/air.png";

// hooks
import { useCarbonIntensityData } from "../../hooks/useCarbonIntensityData";

const CarbonIntensityCard = () => {
  const data = useCarbonIntensityData();

  return (
    <Card
      className="bg-[linear-gradient(to_right_bottom,#153231,#14262d,#171a22,#120f13,#000000)]
"
    >
      <CardHeader
        title="Carbon Intensity"
        icon={
          <IconButton
            icon={<img className="w-4" src={AirIcon} alt="lights" />}
          />
        }
        action={<Badge label="Current" />}
      />

      <DonutChart
        data={data?.sources}
        innerRadius="40%"
        outerRadius="72%"
        height={260}
        showLabels
        centerContent={
          <div className="bg-white px-4 py-2 rounded-full shadow-lg mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-gray-900">
                {data.total}
              </span>
              <span className="text-xs text-gray-600">{data.unit}</span>
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default CarbonIntensityCard;
