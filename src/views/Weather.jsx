import ForeCast from "../components/foreCastCard/foreCast";
import Loader from "../components/loader/loader";
import NavBar from "../components/navbar/navBar";
import WeatherCard from "../components/weatherCard/WeatherCard";
import useFetchWeather from "../hooks/useFetchWeather";
import styles from "./weather.module.scss";

const Weather = () => {
  const { weatherData, forecastData, handleSubmit, loading, firstLoad } =
    useFetchWeather();

  return (
    <>
      <NavBar handleSubmit={handleSubmit} />
      {loading || firstLoad ? (
        <Loader firstLoad={firstLoad} />
      ) : (
        <div className={styles.container}>
          <WeatherCard weatherData={weatherData} />
          {forecastData && <ForeCast forecastData={forecastData} />}
        </div>
      )}
    </>
  );
};

export default Weather;
