import React, { useState } from 'react';

import styles from './OrderPage.module.scss';
import OrderBasket from './OrderBasket/OrderBasket';
import OrderForm from './OrderForm/OrderForm';
import OrderCompleted from './OrderCompleted/OrderCompleted';
import RenderModal from '../Modals/RenderModal';

const OrderPage = () => {
  const [orderStatus, setOrderStatus] = useState(false);

  return (
    <div className={styles.order_container}>
      {orderStatus ? (
        <OrderCompleted />
      ) : (
        <>
          <OrderForm setOrderStatus={setOrderStatus} />
          <div className={styles.orderBasket}>
            <OrderBasket />
          </div>
        </>
      )}
      <RenderModal />
    </div>
  );
};

export default OrderPage;
