import React from 'react';
import { useSelector } from 'react-redux';

import styles from './OrderBasket.module.scss';
import { getUserData } from '../../../utils';
import BasketCard from './BasketCard/BasketCard';
import { getPrice } from '../../../utils/getPrice';
import { useGetAllProducts } from '../../../hooks/useGetAllProducts';

const OrderBasket = () => {
  const allProducts = useGetAllProducts();

  const { email } = getUserData();
  const basket = useSelector((state) => state.baskets.entities[email]);
  const prodIdsInBasket = Object.keys(basket);

  const basketProducts = [];
  let totalPrice = 0;
  prodIdsInBasket.forEach((id) => {
    const prodById = allProducts.find((prod) => prod.id === id);
    basketProducts.push({ ...prodById, count: basket[id].count });
    totalPrice += getPrice(prodById.price) * basket[id].count;
  });

  return (
    <div className={styles.basket}>
      <h2 className={styles.desctop_h2}>Состав заказа</h2>
      <h2 className={styles.mobile_h2}>Ваш заказ</h2>
      <div className={styles.cards_container}>
        {basketProducts.map((product) => {
          return (
            <div key={product.id}>
              <BasketCard prod={product} />
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <span className={styles.total}>Итого:</span>
        <div className={styles.totalPrice}>
          <div className={styles.ellipse}></div>
          <span className={styles.price}>{totalPrice}</span>
          <span className={styles.ruble}>&#x20bd;</span>
        </div>
      </div>
    </div>
  );
};

export default OrderBasket;
