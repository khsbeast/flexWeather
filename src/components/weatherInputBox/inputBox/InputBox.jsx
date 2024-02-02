import styles from "./inputBox.module.scss";
import searchIcon from "../../../assets/search.svg";
import classNames from "classnames";
import DropDown from "./dropDown/DropDown";

const InputBox = ({
  searchCities,
  setShowDropDown,
  query,
  showDropDown,
  handleCitySubmit,
  citiesData,
}) => {
  return (
    <div
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
        onFocus={() => setShowDropDown(true)}
        // onBlur={() => setShowDropDown(false)}
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
