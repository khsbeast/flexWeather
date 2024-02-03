import useFetchWeather from "../../hooks/useFetchWeather";
import styles from "./card.module.scss";

const Card = () => {
  const { weatherData, forecastData } = useFetchWeather();
  console.log(weatherData);
  console.log(forecastData);
  return (
    <div className={styles.card}>
      <div>Delhi , IN</div>
    </div>
  );
};

export default Card;
