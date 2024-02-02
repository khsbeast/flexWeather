import menuSearch from "../../../../assets/menuSearch.svg";
import styles from "./listItem.module.scss";

const ListItem = ({ data }) => {
  return (
    <div
      data-latitude={data.latitude}
      data-longitude={data.longitude}
      data-value={data.city + ", " + data.country}
      className={styles.listItem}
    >
      <img src={menuSearch} alt="search" width="20px" height="20px" />
      {data.city}, {data.country}
    </div>
  );
};

export default ListItem;
