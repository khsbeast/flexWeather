import { set } from "lodash";
import { useEffect, useState } from "react";

const API = "https://api.openweathermap.org/data/2.5";
const KEY = "b33e10b4535b595a5555a6821c97ab35";

const fetchData = async (lat, lon) => {
  try {
    const weatherDataPromise = fetch(
      `${API}/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
    );
    const foreCastPromise = fetch(
      `${API}/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
    );

    let [weather, forecast] = await Promise.all([
      weatherDataPromise,
      foreCastPromise,
    ]);

    const weatherData = await weather.json();
    const forecastData = await forecast.json();
    return { weatherData, forecastData };
  } catch (err) {
    console.log(err);
  }
};
const useFetchWeather = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLoading(true);
        const { weatherData, forecastData } = await fetchData(
          position.coords.latitude,
          position.coords.longitude
        );
        setForecastData(forecastData);
        setWeatherData(weatherData);
        setLoading(false);
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  const handleSubmit = async (lat, lon) => {
    setLoading(true);
    const { weatherData, forecastData } = await fetchData(lat, lon);
    setForecastData(forecastData);
    setWeatherData(weatherData);
    setLoading(false);
  };

  return { weatherData, forecastData, handleSubmit, loading };
};

export default useFetchWeather;
