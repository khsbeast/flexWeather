import styles from "./WeatherCard.module.scss";
import location from "../../assets/pin.png";
import Cloud from "../../assets/weatherIcons/sunandcloud.svg";
import Temperature from "../../assets/temperature.png";
import Sunrise from "../../assets/vitals/sunrise.svg";
import Humidity from "../../assets/vitals/humidity.svg";
import Wind from "../../assets/vitals/wind.svg";
import Pressure from "../../assets/vitals/pressure-low.svg";
import Sunset from "../../assets/vitals/sunset.svg";
import InfoBox from "../infoBox/InfoBox";
import Card from "../card/card";

const WeatherCard = () => {
  return (
    <Card>
      <div className={styles.contentWrapper}>
        <div className={styles.location}>
          <img src={location} alt="search" width="40px" height="40px" />
          <div>Delhi , IN</div>
        </div>
        <div className={styles.midRowWrapper}>
          <div>
            <div className={styles.temp}> 10° C</div>
            <div className={styles.time}> 3 Februry, 2024 | 17:38 PM</div>
          </div>
          <div className={styles.icon}>
            <img src={Cloud} alt="cloud" width="110px" height="110px" />
            <h3> Partially Cloudy </h3>
          </div>
          <div className={styles.info}>
            <img
              src={Temperature}
              alt="temperature"
              width="48px"
              height="48px"
            />
            <div>
              <div> Min. Temperature : 10°C</div>
              <div> Max. Temperature : 20° C</div>
            </div>
          </div>
        </div>
        <div className={styles.endRowWrapper}>
          <InfoBox header="Sunrise" Icon={Sunrise} footer="07:08 PM" border />
          <InfoBox header="Humidity" Icon={Humidity} footer="69 mm" border />
          <InfoBox header="Wind" Icon={Wind} footer="2.03 mph" border />
          <InfoBox header="Pressure" Icon={Pressure} footer="1017 mb" border />
          <InfoBox header="Sunset" Icon={Sunset} footer="18:01 PM" />
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
