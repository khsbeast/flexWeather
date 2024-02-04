import { useState } from "react";
import useFetchCountries from "../../hooks/useFetchCountries";
import InputBox from "./inputBox/inputBox";

const WeatherInputBox = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const { citiesData, setCitiesData, handleSearch } = useFetchCountries();

  const searchCities = (e) => {
    const cityQuery = e.target.value;
    setQuery(cityQuery);
    handleSearch(cityQuery);
  };

  const handleCitySubmit = (e) => {
    let element = e.target;

    const city = element.getAttribute("data-city");
    const country = element.getAttribute("data-country");
    const latitude = element.getAttribute("data-latitude");
    const longitude = element.getAttribute("data-longitude");
    if (element.tagName !== "DIV") {
      element = element.closest("div");
    }
    setQuery(city + ", " + country);
    setShowDropDown(false);
    handleSubmit(latitude, longitude);
    const dataObj = {
      latitude: latitude,
      longitude: longitude,
      city: city,
      country: country,
    };
    
    const localData = JSON.parse(localStorage.getItem("search")) || [];
    if (!localData.find((data) => data.city === dataObj.city))
      localData.unshift(dataObj);
    localStorage.setItem("search", JSON.stringify([...localData].slice(0, 5)));
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
        setCitiesData={setCitiesData}
      />
    </div>
  );
};

export default WeatherInputBox;
