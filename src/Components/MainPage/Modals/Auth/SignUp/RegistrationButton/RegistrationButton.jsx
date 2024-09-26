import styles from './RegistrationButton.module.scss';
import classNames from 'classnames';


const RegistrationButton = ({handleSubmit, isSubmitting}) => {

  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  return (
    <button 
      className={styles.button_container}
      onClick={handleSubmit}
      type="submit"
      disabled={isSubmitting}
    >
      <div className={ellipseFrontClasses}></div>
      <p className={styles.text}>Регистрация</p>
    </button>
  )
}

export default RegistrationButton;