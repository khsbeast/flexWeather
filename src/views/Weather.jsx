import Card from "../components/card/card";
import ForeCast from "../components/foreCastCard/foreCast";
import NavBar from "../components/navbar/navBar";
import WeatherCard from "../components/weatherCard/WeatherCard";
import useFetchWeather from "../hooks/useFetchWeather";
import styles from "./weather.module.scss";

const Weather = () => {
  const { weatherData, forecastData, handleSubmit } = useFetchWeather();
  console.log(weatherData)
  console.log(forecastData)
  return (
    <div>
      <NavBar handleSubmit={handleSubmit} />
      <div className={styles.container}>
        <WeatherCard />
        <ForeCast />
      </div>
    </div>
  );
};

export default Weather;
