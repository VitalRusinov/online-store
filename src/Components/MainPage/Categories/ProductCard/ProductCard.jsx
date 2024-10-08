import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { addProduct } from '../../../../store/basketsSlice';
import modalTypes from '../../../Modals/modalTypes';
import ModalContext from '../../../../context/ModalContext';
import { getPrice } from '../../../../utils';

const ProductCard = ({ prod }) => {

  const { openModal } = useContext(ModalContext);

  const dispatch = useDispatch();

  const {id, image, product, name, color, price} = prod;
  const finishPrice = getPrice(price);


  const ellipseClass = classNames(styles.ellipse, styles[color]);

  const handleBuy = (event) => {
    event.stopPropagation();
    dispatch(addProduct({ id }))
  }

  return (
    <div
      onClick={() => openModal(modalTypes.productCard, prod)}
      className={styles.productCard_container}
    >
      <div className={styles.img_container}>
        <div className={ellipseClass}></div>
        <img className={styles.img} src={image} alt="" loading="lazy"/>
      </div>
      <div className={styles.description_container}>
        <div className={styles.name}>{name}</div>
        <div className={styles.product}>{product}</div>
        <hr />
        <div className={styles.price}>
          <span className={styles.numbers}>{finishPrice}</span>
          <span className={styles.rubles}>&#8381;</span>
        </div>
        <button onClick={handleBuy} className={styles.button}>
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.11344 2.94L3.91344 5.39C3.87344 5.86 4.24344 6.25 4.71344 6.25H20.0234C20.4434 6.25 20.7934 5.93 20.8234 5.51C20.9534 3.74 19.6034 2.3 17.8334 2.3H5.54344C5.44344 1.86 5.24344 1.44 4.93344 1.09C4.43344 0.56 3.73344 0.25 3.01344 0.25H1.27344C0.863438 0.25 0.523438 0.59 0.523438 1C0.523438 1.41 0.863438 1.75 1.27344 1.75H3.01344C3.32344 1.75 3.61344 1.88 3.82344 2.1C4.03344 2.33 4.13344 2.63 4.11344 2.94ZM9.27344 19.75C9.27344 20.7165 8.48994 21.5 7.52344 21.5C6.55694 21.5 5.77344 20.7165 5.77344 19.75C5.77344 18.7835 6.55694 18 7.52344 18C8.48994 18 9.27344 18.7835 9.27344 19.75ZM17.2734 19.75C17.2734 20.7165 16.4899 21.5 15.5234 21.5C14.5569 21.5 13.7734 20.7165 13.7734 19.75C13.7734 18.7835 14.5569 18 15.5234 18C16.4899 18 17.2734 18.7835 17.2734 19.75ZM4.44349 7.75H19.7835C20.2535 7.75 20.6135 8.14 20.5735 8.6L20.2435 13.27C20.1335 14.77 18.8135 16 17.3135 16H6.19349C4.48349 16 3.14349 14.54 3.28349 12.83L3.64349 8.48C3.68349 8.07 4.02349 7.75 4.44349 7.75Z" fill="#D9FF5A" />
          </svg>
          Купить
        </button>

        
      </div>
    </div>
  )
};

export default ProductCard;
