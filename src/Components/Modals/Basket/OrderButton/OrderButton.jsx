import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './OrderButton.module.scss';
import classNames from 'classnames';
import { pages } from '../../../../utils';
import ModalContext from '../../../../context/ModalContext';


const LinkButton = () => {
  const { closeModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const handle = () => {
    navigate(pages.order); // Переходим на страницу Search с состоянием
    closeModal();
  }

  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

 return (
  <button
    className={styles.button_container}
    onClick={handle}
  >
    <div className={ellipseFrontClasses}></div>
    <p className={styles.text}>Оформить</p>
  </button>
 )
}

const OrderButton = ({totalPrice}) => {

  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);
  const disabledButtonClasses = classNames(styles.button_container, styles.disabled);

  return (
    <>
      {totalPrice > 0
        ? <LinkButton /> 
        : (
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