import classNames from "classnames";
import styles from "./MobileProductCard.module.scss";
import { useDispatch } from "react-redux";

import { addProduct } from "../../../../../store/basketsSlice";
import { getPrice } from "../../../../../utils";
import { useContext } from "react";
import ModalContext from "../../../../../context/ModalContext";
import modalTypes from "../../../../Modals/modalTypes";

import { ReactComponent as Basket } from '../../../../../assets/svg/Basket.svg';

const MobileProductCard = ({ prod }) => {
  const { openModal } = useContext(ModalContext);

  const dispatch = useDispatch();

  const { id, image, color, name, product, price } = prod;
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
            <Basket />
            <span>Купить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileProductCard;
