// import Card from "@/components/common/Card/Card";
// import CardHeader from "@/components/common/Card/CardHeader";
// import CarbonDonutChart from "./CarbonDonutChart";
// import { useCarbonIntensityData } from "./useCarbonIntensityData";
// import IconButton from "@/components/common/IconButton/IconButton";
// import Badge from "@/components/common/Badge/Badge";
import AirIcon from "../../../../assets/air.png";

import Card from "../../../../components/common/card/Card";
import CardHeader from "../../../../components/common/card/CardHeader";
import IconButton from "../../../../components/common/iconButton/IconButton";
import { useCarbonIntensityData } from "../../hooks/useCarbonIntensityData";
import Badge from "../../../../components/common/Badge/Badge";
import CarbonIntensityChart from "../../../../components/charts/donut/DonutChart";
// import CarbonDonutChart from "../../../../components/charts/donut/DonutChart";
// import CarbonIntensityGauge from "../../../../components/charts/donut/DonutChart";

const CarbonIntensityCard = () => {
  const data = useCarbonIntensityData();

  return (
    <Card>
      <CardHeader
        title="Carbon Intensity"
        icon={
          <IconButton
            icon={<img className="w-4" src={AirIcon} alt="lights" />}
          />
        }
        action={<Badge label="Current" />}
      />

      <CarbonIntensityChart />
    </Card>
  );
};

export default CarbonIntensityCard;
