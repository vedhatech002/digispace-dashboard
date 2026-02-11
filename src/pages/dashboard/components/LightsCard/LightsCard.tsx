// React-based import
import { useState } from "react";
// components
import Card from "../../../../components/common/card/Card";
import CardHeader from "../../../../components/common/card/CardHeader";
import Toggle from "../../../../components/common/toggle/Toggle";
import IconButton from "../../../../components/common/iconButton/IconButton";
import GaugeChart from "../../../../components/charts/gauge/GaugeChart";
// Assets
import AirIcon from "../../../../assets/air.png";
// hooks
import { useLightsData } from "../../hooks/useLightsData";

const LightsCard = () => {
  const data = useLightsData();
  const [enabled, setEnabled] = useState(true);

  return (
    <Card
      className="
      bg-gradient-to-br from-[#1f716a] via-[#195263] via-[#293446] via-[#211b23] to-black


"
    >
      <CardHeader
        title="Lights"
        icon={
          <IconButton
            icon={<img className="w-4" src={AirIcon} alt="lights" />}
          />
        }
        action={<Toggle checked={enabled} onChange={setEnabled} />}
      />

      <div className="">
        <GaugeChart
          value={data.value}
          min={data.min}
          max={data.max}
          unit={data.unit}
        />
      </div>
    </Card>
  );
};

export default LightsCard;
