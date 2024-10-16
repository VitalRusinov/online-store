import classNames from "classnames";
import styles from "./MobileProductCard.module.scss";
import { useDispatch } from "react-redux";

import { addProduct } from "../../../../../store/basketsSlice";
import { getPrice } from "../../../../../utils";
import { useContext } from "react";
import ModalContext from "../../../../../context/ModalContext";
import modalTypes from "../../../../Modals/modalTypes";

const MobileProductCard = ({ prod }) => {
  const { openModal } = useContext(ModalContext);

  const dispatch = useDispatch();

  const { id, image, color, name, product, price, count } = prod;
  const finishPrice = getPrice(price);

  const ellipseClass = classNames(styles.ellipse, styles[color]);

  const handleBuy = (event) => {
    event.stopPropagation();
    dispatch(addProduct({ id }));
  };

  return (
    <div className={styles.card} onClick={() => openModal(modalTypes.productCard, prod)}>
      <div className={styles.img_container}>
        <img src={image} alt="Изображение товара" loading="lazy" />
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
        </div>
        <hr />
        <div className={styles.underLine}>
          <div className={styles.price}>
            <span className={styles.numbers}>{finishPrice}</span>
            <span className={styles.ruble}>&#x20bd;</span>
          </div>
          <button onClick={handleBuy} className={styles.buy_button}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94ZM10 20.75C10 21.7165 9.2165 22.5 8.25 22.5C7.2835 22.5 6.5 21.7165 6.5 20.75C6.5 19.7835 7.2835 19 8.25 19C9.2165 19 10 19.7835 10 20.75ZM18 20.75C18 21.7165 17.2165 22.5 16.25 22.5C15.2835 22.5 14.5 21.7165 14.5 20.75C14.5 19.7835 15.2835 19 16.25 19C17.2165 19 18 19.7835 18 20.75ZM5.17005 8.75H20.5101C20.9801 8.75 21.3401 9.14 21.3001 9.6L20.9701 14.27C20.8601 15.77 19.5401 17 18.0401 17H6.92005C5.21005 17 3.87005 15.54 4.01005 13.83L4.37005 9.48C4.41005 9.07 4.75005 8.75 5.17005 8.75Z" fill="#D9FF5A"/>
            </svg>
            <span>Купить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileProductCard;