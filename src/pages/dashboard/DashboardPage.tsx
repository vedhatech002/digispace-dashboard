// Components
import LightsCard from "./components/LightsCard/LightsCard";

const DashboardPage = () => {
  return (
    <div
      className="
        grid gap-6
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {/* Top row */}
      {/* <div className="col-span-2"> */}
      <LightsCard />
      <LightsCard />
      <LightsCard />
      <LightsCard />
      <LightsCard />
      {/* </div> */}

      {/* <WaterConsumptionCard /> */}

      {/* <CarbonIntensityCard /> */}

      {/* Bottom row */}
      {/* <EnergyConsumptionCard /> */}
      {/* <FootfallCard /> */}

      {/* Empty right-side area (intentional as per UI) */}
      <div />
    </div>
  );
};

export default DashboardPage;
