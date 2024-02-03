import Card from "../card/card";
import InfoBox from "../infoBox/InfoBox";
import Sunrise from "../../assets/vitals/sunrise.svg";
import ForeCastIcon from "../../assets/forecast.png";
import styles from "./foreCast.module.scss";

const ForeCast = () => {
  return (
    <Card>
      <div className={styles.header}>
        <img src={ForeCastIcon} alt="search" width="35px" height="35px" />
        <div>Forecast</div>
      </div>
      <div style={{ display: "flex", paddingBottom: "1rem" }}>
        <InfoBox
          header="Monday"
          Icon={Sunrise}
          footer="10°C"
          description="Partly Cloudy"
          border
        />
        <InfoBox header="Monday" Icon={Sunrise} footer="10°C" border />
        <InfoBox header="Monday" Icon={Sunrise} footer="10°C" border />
        <InfoBox header="Monday" Icon={Sunrise} footer="10°C" border />
        <InfoBox header="Monday" Icon={Sunrise} footer="10°C" border />
        <InfoBox header="Monday" Icon={Sunrise} footer="10°C" border />
      </div>
    </Card>
  );
};

export default ForeCast;
