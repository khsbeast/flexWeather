import { useState } from "react";
import useFetchCountries from "../../hooks/useFetchCountries";
import useFetchWeather from "../../hooks/useFetchWeather";
import InputBox from "./inputBox/inputBox";

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
    let element = e.target;
    if (element.tagName !== "DIV") {
      element = element.closest("div");
    }
    setQuery(element.getAttribute("data-value"));
    setShowDropDown(false);
    handleSubmit(
      element.getAttribute("data-latitude"),
      element.getAttribute("data-longitude")
    );
  };

  return (
    <div>
      {" "}
      <InputBox
        searchCities={searchCities}
        query={query}
        setShowDropDown={setShowDropDown}
        showDropDown={showDropDown}
        handleCitySubmit={handleCitySubmit}
        citiesData={citiesData}
      />
    </div>
  );
};

export default WeatherInputBox;
