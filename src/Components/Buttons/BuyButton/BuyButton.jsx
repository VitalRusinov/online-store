import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/basketsSlice";
import styles from "./BuyButton.module.scss";
import classNames from "classnames";

import { ReactComponent as Basket } from '../../../assets/svg/Basket.svg';

const BuyButton = ({ id }) => {
  const dispatch = useDispatch();

  const ellipseBackClasses = classNames(styles.ellipse, styles.ellipse_back);
  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  const handle = (event) => {
    event.stopPropagation();
    dispatch(addProduct({ id }));
  };

  return (
    <button onClick={handle} className={styles.button_container}>
      <div className={ellipseBackClasses}></div>
      <div className={ellipseFrontClasses}></div>
      <div className={styles.icon}>
        <Basket />
      </div>
      <span className={styles.text}>Купить</span>
    </button>
  );
};

export default BuyButton;
