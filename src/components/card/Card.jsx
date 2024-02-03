import useFetchWeather from "../../hooks/useFetchWeather";
import WeatherCard from "../weatherCard/WeatherCard";
import styles from "./card.module.scss";

const Card = ({ children }) => {
  const { weatherData, forecastData } = useFetchWeather();
  return <div className={styles.card}>{children}</div>;
};

export default Card;
