import menuSearch from "../../../../assets/menuSearch.svg";
import styles from "./listItem.module.scss";

const ListItem = ({ data }) => {
  const { latitude, longitude, city, country } = data;
  return (
    <div
      data-latitude={latitude}
      data-longitude={longitude}
      data-city={city}
      data-country={country}
      className={styles.listItem}
    >
      <img src={menuSearch} alt="search" width="20px" height="20px" />
      {city}, {country}
    </div>
  );
};

export default ListItem;
