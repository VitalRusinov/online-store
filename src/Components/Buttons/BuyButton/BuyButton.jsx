import styles from './BuyButton.module.scss';
import classNames from 'classnames';


const BuyButton = () => {

  const ellipseBackClasses = classNames(styles.ellipse, styles.ellipse_back);
  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  return (
    <button className={styles.button_container}>
      <div className={ellipseBackClasses}></div>
      <div className={ellipseFrontClasses}></div>
      <div className={styles.icon}>
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.84 2.94049L3.64 5.39049C3.6 5.86049 3.97 6.25049 4.44 6.25049H19.75C20.17 6.25049 20.52 5.93049 20.55 5.51049C20.68 3.74049 19.33 2.30049 17.56 2.30049H5.27C5.17 1.86049 4.97 1.44049 4.66 1.09049C4.16 0.560488 3.46 0.250488 2.74 0.250488H1C0.59 0.250488 0.25 0.590488 0.25 1.00049C0.25 1.41049 0.59 1.75049 1 1.75049H2.74C3.05 1.75049 3.34 1.88049 3.55 2.10049C3.76 2.33049 3.86 2.63049 3.84 2.94049ZM9 19.7505C9 20.717 8.2165 21.5005 7.25 21.5005C6.2835 21.5005 5.5 20.717 5.5 19.7505C5.5 18.784 6.2835 18.0005 7.25 18.0005C8.2165 18.0005 9 18.784 9 19.7505ZM17 19.7505C17 20.717 16.2165 21.5005 15.25 21.5005C14.2835 21.5005 13.5 20.717 13.5 19.7505C13.5 18.784 14.2835 18.0005 15.25 18.0005C16.2165 18.0005 17 18.784 17 19.7505ZM4.17005 7.75049H19.5101C19.9801 7.75049 20.3401 8.14049 20.3001 8.60049L19.9701 13.2705C19.8601 14.7705 18.5401 16.0005 17.0401 16.0005H5.92005C4.21005 16.0005 2.87005 14.5405 3.01005 12.8305L3.37005 8.48049C3.41005 8.07049 3.75005 7.75049 4.17005 7.75049Z" fill="#D9FF5A" />
        </svg>
      </div>
      <span className={styles.text}>Купить</span>
    </button>
  )
}

export default BuyButton;