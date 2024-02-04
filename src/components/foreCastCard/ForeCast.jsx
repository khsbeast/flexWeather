import Card from "../card/card";
import InfoBox from "../infoBox/InfoBox";
import ForeCastIcon from "../../assets/forecast.png";
import styles from "./foreCast.module.scss";
import { formatForecastData } from "../../utils/utils";

const ForeCast = ({ forecastData }) => {
  
  const data = formatForecastData(forecastData);

  return (
    <div className={styles.foreCastWrapper}>
      <Card>
        <div className={styles.header}>
          <img src={ForeCastIcon} alt="search" width="32px" height="32px" />
          <div>Forecast</div>
        </div>
        <div className={styles.foreCastList}>
          {data.map((item, index) => {
            return (
              <InfoBox
                key={index}
                header={item.day}
                Icon={`/src/assets/weatherIcons/${item.icon}.svg`}
                footer={`${item.temp}° C`}
                description={item.weather}
                border={index !== data.length - 1}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default ForeCast;
