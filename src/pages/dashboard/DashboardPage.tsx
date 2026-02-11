// Components
import CarbonIntensityCard from "./components/CarbonIntensityCard/CarbonIntensityCard";
import EnergyConsumptionCard from "./components/EnergyConsumptionCard/EnergyConsumptionCard";
import FootfallCard from "./components/FootfallCard/FootfallCard";
import LightsCard from "./components/LightsCard/LightsCard";
import WaterConsumptionCard from "./components/WaterConsumptionCard/WaterConsumptionCard";

const DashboardPage = () => {
  return (
    <div
      className="
        grid gap-2
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
      "
    >
      <LightsCard />
      <WaterConsumptionCard />
      <CarbonIntensityCard />
      <EnergyConsumptionCard />
      <FootfallCard />

      <div />
    </div>
  );
};

export default DashboardPage;
