import Card from "../components/card/card";
import NavBar from "../components/navbar/navBar";
import useFetchWeather from "../hooks/useFetchWeather";

const Weather = () => {
  const { weatherData, forecastData, handleSubmit } = useFetchWeather();
  return (
    <div>
      <NavBar handleSubmit={handleSubmit} />
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Weather;
