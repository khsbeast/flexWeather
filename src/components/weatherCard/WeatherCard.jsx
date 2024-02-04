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
import { formatWeatherData } from "../../utils/utils";

const WeatherCard = ({ weatherData }) => {
  const data = formatWeatherData(weatherData);

  return (
    <Card>
      <div className={styles.contentWrapper}>
        <div className={styles.location}>
          <img src={location} alt="search" width="40px" height="40px" />
          <div>
            {data.city} , {data.country}
          </div>
        </div>
        <div className={styles.midRowWrapper}>
          <div className={styles.header}>
            <div className={styles.temp}> {data.temp}° C</div>
            <div className={styles.time}>
              {" "}
              {data.date} | {data.time}
            </div>
          </div>
          <div className={styles.icon}>
            <img
              src={`/src/assets/weatherIcons/${data.icon}.svg`}
              alt="cloud"
              width="110px"
              height="110px"
            />
            <h3> {data.weather} </h3>
          </div>
          <div className={styles.info}>
            <img
              src={Temperature}
              alt="temperature"
              width="48px"
              height="48px"
            />
            <div>
              <div> Min. Temperature : {data.minTemp}°C</div>
              <div> Max. Temperature : {data.maxTemp}° C</div>
            </div>
          </div>
        </div>
        <div className={styles.endRowWrapper}>
          <InfoBox
            header="Sunrise"
            Icon={Sunrise}
            footer={data.sunRise}
            border
          />
          <InfoBox
            header="Humidity"
            Icon={Humidity}
            footer={`${data.humidity} mm`}
            border
          />
          <InfoBox
            header="Wind"
            Icon={Wind}
            footer={`${data.wind} mph`}
            border
          />
          <InfoBox
            header="Pressure"
            Icon={Pressure}
            footer={`${data.pressure} mb`}
            border
          />
          <InfoBox header="Sunset" Icon={Sunset} footer={data.sunSet} />
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
