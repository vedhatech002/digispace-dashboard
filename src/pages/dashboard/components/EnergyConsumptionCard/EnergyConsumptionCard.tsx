// components
import Badge from "../../../../components/common/badge/Badge";
import Card from "../../../../components/common/card/Card";
import CardHeader from "../../../../components/common/card/CardHeader";
import IconButton from "../../../../components/common/iconButton/IconButton";
import BarChart from "../../../../components/charts/bar/BarChart";
// Assets
import FlashIcon from "../../../../assets/flash.png";
// hooks
import { useEnergyData } from "../../hooks/useEnergyData";

const EnergyConsumptionCard = () => {
  const { labels, values } = useEnergyData();

  return (
    <Card
      className="bg-gradient-to-br from-black via-[#050405] via-[#08080a] via-[#0a0c0e] to-[#0c1011]

"
    >
      <CardHeader
        title="Energy Consumption"
        icon={
          <IconButton
            icon={<img className="w-4" src={FlashIcon} alt="lights" />}
          />
        }
        action={<Badge label="Last 7 Day" />}
      />

      <BarChart labels={labels} values={values} unit="kWh" />
    </Card>
  );
};

export default EnergyConsumptionCard;
