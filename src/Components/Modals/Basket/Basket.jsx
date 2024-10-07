import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Basket.module.scss';
import { getUserData } from '../../../utils';
import BasketCard from './BasketCard/BasketCard';
import OrderButton from './OrderButton/OrderButton';

const Basket = ({openModal, closeModal}) => {

  const chairs = useSelector((state) => state.chairs.entries);
  const lamps = useSelector((state) => state.lamps.entries);
  const mirrors = useSelector((state) => state.mirrors.entries);
  const tables = useSelector((state) => state.tables.entries);
  const allProducts = [...chairs, ...lamps, ...mirrors, ...tables];
  
  const {email} = getUserData();
  const basket = useSelector((state) => state.baskets.entities[email]);
  const prodIdsInBasket = Object.keys(basket);

  const basketProducts = [];
  let totalPrice = 0;
  prodIdsInBasket.forEach(id => {
    const prodById = allProducts.find(prod => prod.id === id);
    basketProducts.push({...prodById, count: basket[id].count});
    totalPrice += prodById.price * basket[id].count
  })

  return (
    <div className={styles.basket}>
      <h2>Ваша корзина</h2>
      <button 
        className={styles.closeButton}
        onClick={closeModal}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="2" x2="16" y2="16" stroke="white" strokeWidth="2"/>
          <line x1="2" y1="16" x2="16" y2="2" stroke="white" strokeWidth="2"/>
        </svg>
      </button>
      <div className={styles.cards_container}>
        {basketProducts.map((product) => {
          return (
            <div key={product.id}>
              <BasketCard prod={product} />
            </div>
          )
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.totalPrice}>
          <p>Итого:</p>
          <span className={styles.price}>{totalPrice}</span>
          <span className={styles.ruble}>&#x20bd;</span>
        </div>
        <OrderButton totalPrice={totalPrice}/>
      </div>
    </div>
  );
};

export default Basket;

