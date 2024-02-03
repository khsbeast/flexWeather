import Card from "../components/card/card";
import NavBar from "../components/navbar/navBar";
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
        <Card />
      </div>
    </div>
  );
};

export default Weather;
