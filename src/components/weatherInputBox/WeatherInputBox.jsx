import { useState } from "react";
import useFetchCountries from "../../hooks/useFetchCountries";
import useFetchWeather from "../../hooks/useFetchWeather";

const WeatherInputBox = () => {
  const [query, setQuery] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const { citiesData, handleSearch } = useFetchCountries();
  const { weatherData, forecastData, handleSubmit } = useFetchWeather();

  const searchCities = (e) => {
    const cityQuery = e.target.value;
    setQuery(cityQuery);
    handleSearch(cityQuery);
  };

  const handleCitySubmit = (e) => {
    setQuery(e.target.getAttribute("data-value"));
    setShowDropDown(false);
    handleSubmit(
      e.target.getAttribute("data-latitude"),
      e.target.getAttribute("data-longitude")
    );
  };

  return (
    <div>
      {" "}
      <input
        type="text"
        onChange={searchCities}
        onFocus={() => setShowDropDown(true)}
        // onBlur={() => setShowDropDown(false)}
        value={query}
      />
      <div onClick={handleCitySubmit}>
        {showDropDown &&
          citiesData.map((data, index) => (
            <div
              key={index}
              data-latitude={data.latitude}
              data-longitude={data.longitude}
              data-value={data.city + ", " + data.country}
            >
              {" "}
              {data.city}, {data.country}{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeatherInputBox;
