import styles from "./loader.module.scss";
import SunCloud from "../../assets/weatherIcons/sunandcloud.svg";

const Loader = ({ firstLoad }) => {
  return (
    <div className={styles.loader}>
      <img src={SunCloud} alt="loader" height="200px" />
      <h2>
        {firstLoad
          ? "Hey, you can get started by providing location access or searching for a City :)"
          : "Fetching Data..."}
      </h2>
    </div>
  );
};

export default Loader;
