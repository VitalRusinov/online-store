import styles from "./ExitButton.module.scss";
import classNames from "classnames";

const ExitButton = ({ handleSubmit }) => {
  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  return (
    <button
      className={styles.button_container}
      onClick={handleSubmit}
      type="button"
    >
      <div className={ellipseFrontClasses}></div>
      <p className={styles.text}>Выйти</p>
    </button>
  );
};

export default ExitButton;
