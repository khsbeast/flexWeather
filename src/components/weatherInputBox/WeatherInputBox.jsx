import { useState } from "react";
import useFetchCountries from "../../hooks/useFetchCountries";
import InputBox from "./inputBox/inputBox";
import { addToLocalStorage } from "../../utils/utils";

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

    // Event delegation to get the div element instead of attaching event listner to all child its better to add to parent

    if (element.tagName !== "DIV") {
      element = element.closest("div");
    }
    setQuery(city + ", " + country);
    setShowDropDown(false);
    handleSubmit(latitude, longitude);

    addToLocalStorage({ latitude, longitude, city, country });
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
