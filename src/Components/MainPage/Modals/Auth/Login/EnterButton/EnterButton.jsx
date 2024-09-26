import styles from './EnterButton.module.scss';
import classNames from 'classnames';


const EnterButton = ({handleSubmit, isSubmitting}) => {

  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  return (
    <button 
      className={styles.button_container}
      onClick={handleSubmit}
      type="submit"
      disabled={isSubmitting}
    >
      <div className={ellipseFrontClasses}></div>
      <p className={styles.text}>Войти</p>
    </button>
  )
}

export default EnterButton;