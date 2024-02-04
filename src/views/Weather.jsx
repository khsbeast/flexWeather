import ForeCast from "../components/foreCastCard/foreCast";
import NavBar from "../components/navbar/navBar";
import WeatherCard from "../components/weatherCard/WeatherCard";
import useFetchWeather from "../hooks/useFetchWeather";
import styles from "./weather.module.scss";

const Weather = () => {
  const { weatherData, forecastData, handleSubmit, loading } =
    useFetchWeather();

  return (
    <>
      <NavBar handleSubmit={handleSubmit} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <WeatherCard weatherData={weatherData} />
          <ForeCast forecastData={forecastData} />
        </div>
      )}
    </>
  );
};

export default Weather;
