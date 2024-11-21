import React from 'react';

import { useFormik } from 'formik';

import { getUserData } from '../../../utils';
import styles from './OrderForm.module.scss';
import { useSelector } from 'react-redux';
import OrderBasket from '../OrderBasket/OrderBasket';

const OrderForm = ({ setOrderStatus }) => {
  const { email } = getUserData();
  const basket = useSelector((state) => state.baskets.entities[email]);

  // Инициализация useFormik
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
    },
    onSubmit: (values) => {
      console.log('Данные формы:', values);
      console.log('Корзина:', basket);
      setOrderStatus(true);
    },
  });

  return (
    <div className={styles.form_container}>
      <h2>Оформление заказа</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit} id="myForm">
        <div>
          <label htmlFor="name"></label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            onChange={formik.handleChange}
            value={formik.values.name}
            className={styles.input}
            required
          />
        </div>

        <div>
          <label htmlFor="address"></label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Адрес"
            onChange={formik.handleChange}
            value={formik.values.address}
            className={styles.input}
            required
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Телефон"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className={styles.input}
            required
          />
        </div>
      </form>
      <div className={styles.mobile_basket}>
        <OrderBasket />
      </div>
      <button className={styles.orderButton} type="submit" form="myForm">
        <div className={styles.ellipse}></div>
        <span>Заказать</span>
      </button>
    </div>
  );
};

export default OrderForm;
