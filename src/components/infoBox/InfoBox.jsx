import classNames from "classnames";
import styles from "./InfoBox.module.scss";

const InfoBox = ({ header, Icon, footer, border, description }) => {
  return (
    <div
      className={classNames({
        [styles.box]: true,
        [styles.border]: border,
      })}
    >
      <div>{header.toUpperCase()}</div>
      <div>
        <img src={Icon} alt="sunrise" width="100px" />
      </div>
      <div>{description}</div>
      <div>{footer}</div>
    </div>
  );
};

export default InfoBox;
