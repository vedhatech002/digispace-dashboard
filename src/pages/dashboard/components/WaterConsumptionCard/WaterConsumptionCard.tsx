// Components
import Badge from "../../../../components/common/badge/Badge";
import Card from "../../../../components/common/card/Card";
import CardHeader from "../../../../components/common/card/CardHeader";
import IconButton from "../../../../components/common/iconButton/IconButton";
// Assets
import DropIcon from "../../../../assets/drop.png";
import HumidIcon from "../../../../assets/Humid.png";
// hooks
import { useWaterConsumptionData } from "../../hooks/useWaterConsumptionData";

const WaterConsumptionCard = () => {
  const data = useWaterConsumptionData();

  return (
    <Card className="bg-[linear-gradient(to_right_bottom,#000000,#120f13,#171a22,#14262d,#153231)]">
      <CardHeader
        title="Water Consumption"
        icon={
          <IconButton
            icon={<img className="w-3" src={DropIcon} alt="drop" />}
          />
        }
        action={<Badge label="Yesterday" />}
      />

      {/* Center Icon */}
      <div className="flex flex-col items-center mt-16">
        {/* <DropIcon className="w-10 h-10 text-[#2EF2C5]" /> */}
        <img className="w-10" src={HumidIcon} alt="humid" />
      </div>

      {/* Value Pill */}
      <div className="flex justify-center mt-3">
        <div
          className="
            px-6 py-3
            rounded-full
            bg-[rgba(46,242,197,0.15)]
            backdrop-blur-md
          "
        >
          <span className="text-xl  font-semibold text-white">
            {data.value}
          </span>
          <span className="text-lg text-gray-300 ml-1">{data.unit}</span>
        </div>
      </div>

      {/* Comparison */}
      <div className="flex justify-center mt-4">
        <div
          className="
            flex items-center gap-2
            px-4 py-3
            rounded-full
            bg-[rgba(46,242,197,0.08)]
          "
        >
          {/* <ArrowDownIcon className="w-4 h-4 text-[#2EF2C5]" /> */}
          <span className="text-xs text-[#2EF2C5]">
            {data.comparisonValue}
            {data.unit} {data.comparisonText}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default WaterConsumptionCard;
