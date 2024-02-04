import styles from "../inputBox.module.scss";
import ListItem from "./ListItem";

const DropDown = ({ handleCitySubmit, showDropDown, citiesData }) => {
  return (
    <div
      onMouseDown={handleCitySubmit}
      className={showDropDown && styles.dropDown}
    >
      {showDropDown &&
        citiesData.map((data, index) => (
          <ListItem key={index} index={index} data={data} />
        ))}
    </div>
  );
};

export default DropDown;
