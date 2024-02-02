import styles from "./navBar.module.scss";
import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/avatar.png";
import WeatherInputBox from "../weatherInputBox/WeatherInputBox";

const NavBar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src={Logo} alt="Flexi Weather" />
        <WeatherInputBox />
        <img src={Avatar} alt="Avatar" height="54px" />
      </div>
    </div>
  );
};

export default NavBar;
