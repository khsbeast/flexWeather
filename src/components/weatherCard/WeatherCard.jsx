import styles from "./WeatherCard.module.scss";
import location from "../../assets/pin.png";
import Temperature from "../../assets/temperature.png";
import InfoBox from "../infoBox/InfoBox";
import Card from "../card/card";
import { formatWeatherData } from "../../utils/utils";
import { vitalsData } from "./data";

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
          {vitalsData.map((item, index) => (
            <InfoBox
              key={item.id}
              header={item.title}
              Icon={item.icon}
              footer={data[item.dataKey] + item.unit}
              border={index !== vitalsData.length - 1}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
