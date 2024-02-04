import styles from "./inputBox.module.scss";
import searchIcon from "../../../assets/search.svg";
import classNames from "classnames";
import DropDown from "./dropDown/DropDown";
import { set } from "lodash";

const InputBox = ({
  searchCities,
  setShowDropDown,
  query,
  showDropDown,
  handleCitySubmit,
  citiesData,
  setCitiesData,
}) => {
  const handleFocus = (e) => {
    setShowDropDown(true);
    if (e.target.value === "")
      setCitiesData(JSON.parse(localStorage.getItem("search")) || []);
  };

  return (
    <div
      onBlur={() => setShowDropDown(false)}
      className={classNames({
        [styles.inputBox]: true,
        [styles.boxActive]: showDropDown,
      })}
    >
      {" "}
      <img src={searchIcon} alt="search" width="20px" height="20ox" />
      <input
        type="text"
        placeholder="Search for a city..."
        onChange={searchCities}
        onFocus={handleFocus}
        value={query}
      />
      <DropDown
        handleCitySubmit={handleCitySubmit}
        showDropDown={showDropDown}
        citiesData={citiesData}
      />
    </div>
  );
};

export default InputBox;
