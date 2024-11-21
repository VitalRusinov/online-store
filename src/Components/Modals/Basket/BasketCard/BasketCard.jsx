import classNames from "classnames";
import styles from "./BasketCard.module.scss";
import { useDispatch } from "react-redux";

import {
  addProduct,
  decrementProduct,
  removeProduct,
} from "../../../../store/basketsSlice";
import { getPrice } from "../../../../utils";

import { ReactComponent as DeleteButton } from '../../../../assets/svg/DeleteButton.svg';

const BasketCard = ({ prod }) => {
  const dispatch = useDispatch();

  const { id, image, color, name, product, price, count } = prod;
  const finishPrice = getPrice(price);

  const ellipseClass = classNames(styles.ellipse, styles[color]);
  const decrementProductClass = classNames(styles.button, {
    [styles.disabled]: count <= 1,
  });

  return (
    <div className={styles.card}>
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
          <button
            className={styles.removeButton}
            onClick={() => dispatch(removeProduct({ id }))}
          >
            <DeleteButton />
          </button>
        </div>
        <hr />
        <div className={styles.underLine}>
          <div className={styles.price}>
            <span className={styles.numbers}>{finishPrice}</span>
            <span className={styles.ruble}>&#x20bd;</span>
          </div>
          <div className={styles.productCount}>
            <button
              className={decrementProductClass}
              disabled={count <= 1}
              onClick={() => dispatch(decrementProduct({ id }))}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className={styles.button}
              onClick={() => dispatch(addProduct({ id }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
