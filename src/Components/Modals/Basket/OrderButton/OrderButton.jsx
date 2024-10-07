import { Link } from 'react-router-dom';
import styles from './OrderButton.module.scss';
import classNames from 'classnames';
import { pages } from '../../../../utils';


const OrderButton = ({totalPrice}) => {

  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);
  const disabledButtonClasses = classNames(styles.button_container, styles.disabled);

  return (
    <>
      {totalPrice > 0
        ? (<Link
        to={pages.order}
        className={styles.button_container}
        type="submit"
      >
        <div className={ellipseFrontClasses}></div>
        <p className={styles.text}>Оформить</p>
      </Link>
      ) : (
        <div
        className={disabledButtonClasses}
      >
        <div className={ellipseFrontClasses}></div>
        <p className={styles.text}>Оформить</p>
      </div>
      )}
    </>
  )
}

export default OrderButton;