// Components
import Badge from "../../../../components/common/badge/Badge";
import CardHeader from "../../../../components/common/card/CardHeader";
import Card from "../../../../components/common/card/Card";
import LineChart from "../../../../components/common/line/LineChart";
import IconButton from "../../../../components/common/iconButton/IconButton";
// Assets
import UserIcon from "../../../../assets/users.png";
// hooks
import { useFootfallData } from "../../hooks/useFootfallData";

const FootfallCard = () => {
  const { labels, values } = useFootfallData();

  return (
    <Card
      className="bg-linear-to-br from-[#0a1011] via-[#0b1011] via-[#0b1011] via-[#0c1011] to-[#0c1011]

"
    >
      <CardHeader
        title="Footfall"
        action={<Badge label="Last 7 Day" />}
        icon={
          <IconButton
            icon={<img className="w-4" src={UserIcon} alt="lights" />}
          />
        }
      />

      <LineChart labels={labels} values={values} />
    </Card>
  );
};

export default FootfallCard;
