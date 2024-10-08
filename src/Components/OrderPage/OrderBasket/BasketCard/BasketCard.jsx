import classNames from 'classnames';
import styles from './BasketCard.module.scss';
import { useDispatch } from 'react-redux';

import { removeProduct } from '../../../../store/basketsSlice';

const BasketCard = ({prod}) => {
  const dispatch = useDispatch();

  const { id, image, color, name, product, price, count } = prod;

  const ellipseClass = classNames(styles.ellipse, styles[color]);

  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img src={image} alt="Изображение товара" loading="lazy"/>
      </div>
      <div className={styles.main}>
        <div className={styles.aboveLine}>
          <div className={styles.text}>
            <div className={styles.name}>
              <div className={ellipseClass}></div>
              <span>{name}</span>
            </div>
            <div className={styles.product}>
              <span>{product}</span>
            </div>
          </div>
          <button className={styles.removeButton} onClick={() => dispatch(removeProduct({ id }))}>
            <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.1489 8.08394C24.169 7.87956 22.189 7.72628 20.1968 7.61131V7.59854L19.9262 5.93796C19.7417 4.76277 19.4712 3 16.5935 3H13.3715C10.5061 3 10.2355 4.68613 10.0388 5.92518L9.7805 7.56022C8.6368 7.63686 7.4931 7.7135 6.34941 7.82847L3.84065 8.08394C3.32414 8.13504 2.95521 8.60766 3.0044 9.13139C3.05359 9.65511 3.49631 10.0383 4.01282 9.98723L6.52158 9.73175C12.9656 9.06752 19.4589 9.32299 25.9767 10C26.0136 10 26.0382 10 26.0751 10C26.5424 10 26.9483 9.62956 26.9975 9.13139C27.0344 8.60766 26.6654 8.13504 26.1489 8.08394Z" fill="#D9FF5A" />
              <path d="M23.5935 12.4677C23.3082 12.1679 22.916 12 22.5119 12H7.48813C7.08401 12 6.67989 12.1679 6.40651 12.4677C6.13314 12.7675 5.97862 13.1752 6.0024 13.5949L6.73932 25.8987C6.87006 27.7215 7.03647 30 11.1846 30H18.8154C22.9635 30 23.1299 27.7335 23.2607 25.8987L23.9976 13.6069C24.0214 13.1752 23.8669 12.7675 23.5935 12.4677ZM16.9731 23.992H13.0151C12.5277 23.992 12.1236 23.5843 12.1236 23.0926C12.1236 22.6009 12.5277 22.1932 13.0151 22.1932H16.9731C17.4604 22.1932 17.8645 22.6009 17.8645 23.0926C17.8645 23.5843 17.4604 23.992 16.9731 23.992ZM17.9715 19.1952H12.0285C11.5412 19.1952 11.1371 18.7875 11.1371 18.2958C11.1371 17.8041 11.5412 17.3964 12.0285 17.3964H17.9715C18.4588 17.3964 18.8629 17.8041 18.8629 18.2958C18.8629 18.7875 18.4588 19.1952 17.9715 19.1952Z" fill="#D9FF5A" />
            </svg>
          </button>
        </div>
        <hr />
        <div className={styles.underLine}>
          <div className={styles.price}>
            <span className={styles.numbers}>{price}</span>
            <span className={styles.ruble}>&#x20bd;</span>
          </div>
          <div className={styles.productCount}>
            <span>x{count}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BasketCard;
