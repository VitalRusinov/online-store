import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Basket.module.scss';
import { getPrice, getUserData } from '../../../utils';
import BasketCard from './BasketCard/BasketCard';
import OrderButton from './OrderButton/OrderButton';
import ModalContext from '../../../context/ModalContext';
import { useGetAllProducts } from '../../../hooks/useGetAllProducts';

import { ReactComponent as CloseButton } from '../../../assets/svg/CloseButton.svg';

const Basket = () => {
  const { closeModal } = useContext(ModalContext);

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

  useEffect(() => {
    // Отключаем скролл основного окна при монтировании компонента
    if (window.innerWidth < 500) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.basket}>
        <h2>Ваша корзина</h2>
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseButton />
        </button>
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
          <div className={styles.totalPrice}>
            <p>Итого:</p>
            <span className={styles.price}>{totalPrice}</span>
            <span className={styles.ruble}>&#x20bd;</span>
          </div>
          <OrderButton totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
