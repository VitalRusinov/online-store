import styles from './OrderButton.module.scss';
import classNames from 'classnames';


const OrderButton = ({handleSubmit, totalPrice}) => {

  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  return (
    <button 
      className={styles.button_container}
      onClick={handleSubmit}
      type="submit"
      disabled={totalPrice === 0 }
    >
      <div className={ellipseFrontClasses}></div>
      <p className={styles.text}>Оформить</p>
    </button>
  )
}

export default OrderButton;