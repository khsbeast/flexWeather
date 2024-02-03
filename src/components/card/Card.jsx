import useFetchWeather from "../../hooks/useFetchWeather";
import styles from "./card.module.scss";
import location from "../../assets/pin.png";
import Cloud from "../../assets/weatherIcons/sunandcloud.svg";
import Temperature from "../../assets/temperature.png";
import Sunrise from "../../assets/vitals/sunrise.svg";
import Humidity from "../../assets/vitals/humidity.svg";
import Wind from "../../assets/vitals/wind.svg";
import Pressure from "../../assets/vitals/pressure-low.svg";
import Sunset from "../../assets/vitals/sunset.svg";
import InfoBox from "../infoBox/InfoBox";

const Card = () => {
  const { weatherData, forecastData } = useFetchWeather();
  return (
    <div className={styles.card}>
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
          <InfoBox header="Sunrise" Icon={Sunrise} footer="07:08 PM" />
          <InfoBox header="Humidity" Icon={Humidity} footer="07:08 PM" />
          <InfoBox header="Wind" Icon={Wind} footer="07:08 PM" />
          <InfoBox header="Pressure" Icon={Pressure} footer="07:08 PM" />
          <InfoBox header="Sunset" Icon={Sunset} footer="07:08 PM" />
        </div>
      </div>
    </div>
  );
};

export default Card;
