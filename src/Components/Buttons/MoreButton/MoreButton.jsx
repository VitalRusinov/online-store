import styles from './MoreButton.module.scss';
import classNames from 'classnames';


const MoreButton = () => {

  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  return (
    <button className={styles.button_container}>
      <div className={ellipseFrontClasses}></div>
      <p className={styles.text}>Загрузить ещё</p>
      <div className={styles.icon}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.8353 14L12.8385 20L6.8418 14" stroke="#D9FF5A" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.8398 4V21" stroke="#D9FF5A" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  )
}

export default MoreButton;