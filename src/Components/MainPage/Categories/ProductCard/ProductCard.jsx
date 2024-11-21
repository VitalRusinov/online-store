import { useContext } from "react";
import { useDispatch } from "react-redux";
import styles from "./ProductCard.module.scss";
import classNames from "classnames";
import { addProduct } from "../../../../store/basketsSlice";
import modalTypes from "../../../Modals/modalTypes";
import ModalContext from "../../../../context/ModalContext";
import { getPrice } from "../../../../utils";

import { ReactComponent as Basket } from '../../../../assets/svg/Basket.svg';

const ProductCard = ({ prod }) => {
  const { openModal } = useContext(ModalContext);

  const dispatch = useDispatch();

  const { id, image, product, name, color, price } = prod;
  const finishPrice = getPrice(price);

  const ellipseClass = classNames(styles.ellipse, styles[color]);

  const handleBuy = (event) => {
    event.stopPropagation();
    dispatch(addProduct({ id }));
  };

  return (
    <div
      onClick={() => openModal(modalTypes.productCard, prod)}
      className={styles.productCard_container}
    >
      <div className={styles.img_container}>
        <div className={ellipseClass}></div>
        <img className={styles.img} src={image} alt="" loading="lazy" />
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
          <Basket />
          Купить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
