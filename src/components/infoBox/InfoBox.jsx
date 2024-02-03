import styles from "./InfoBox.module.scss";

const InfoBox = ({ header, Icon, footer }) => {
  return (
    <div className={styles.box}>
      <div>{header.toUpperCase()}</div>
      <div>
        <img src={Icon} alt="sunrise" width="100px" />
      </div>
      <div>{footer}</div>
    </div>
  );
};

export default InfoBox;
