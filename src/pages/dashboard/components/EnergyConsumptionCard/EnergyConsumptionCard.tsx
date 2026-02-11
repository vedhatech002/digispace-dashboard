import Badge from "../../../../components/common/Badge/Badge";
import Card from "../../../../components/common/card/Card";
import CardHeader from "../../../../components/common/card/CardHeader";
import IconButton from "../../../../components/common/iconButton/IconButton";
import { useEnergyData } from "../../hooks/useEnergyData";
import FlashIcon from "../../../../assets/flash.png";
import BarChart from "../../../../components/charts/bar/BarChart";

const EnergyConsumptionCard = () => {
  const { labels, values } = useEnergyData();

  return (
    <Card
      className="bg-linear-to-br from-[#0a1011] via-[#0b1011] via-[#0b1011] via-[#0c1011] to-[#0c1011]
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
