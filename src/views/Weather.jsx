import ForeCast from "../components/foreCastCard/foreCast";
import NavBar from "../components/navbar/navBar";
import WeatherCard from "../components/weatherCard/WeatherCard";
import useFetchWeather from "../hooks/useFetchWeather";
import styles from "./weather.module.scss";

const Weather = () => {
  const { weatherData, forecastData, handleSubmit } = useFetchWeather();

  return (
    <>
      <NavBar handleSubmit={handleSubmit} />
      <div className={styles.container}>
        <WeatherCard weatherData={weatherData} />
        <ForeCast forecastData={forecastData}/>
      </div>
    </>
  );
};

export default Weather;
