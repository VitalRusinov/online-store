import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useFormik } from "formik";

import { getUserData, pages } from '../../utils';
import styles from './OrderPage.module.scss';
import getModal from '../Modals/index';
import Menu from '../Menu/Menu';
import OrderBasket from './OrderBasket/OrderBasket';
import OrderForm from './OrderForm/OrderForm';
import OrderCompleted from './OrderCompleted/OrderCompleted';


// Вынести повторение (открытие модальных окон) в отдельный файл 

const renderModal = (modalInfo, openModal, closeModal) => {
  if (!modalInfo.type) {
    return null;
  }
  const Component = getModal(modalInfo.type);
  return (
    <Component
      modalInfo={modalInfo}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
};

const OrderPage = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [modalInfo, setModalInfo] = useState({ type: null, payload: null });

  const openModal = (type, payload = null) => setModalInfo({ type, payload });
  const closeModal = () => setModalInfo({ type: null, payload: null });

 
  return (
    <div className={styles.order_container}>
      <Menu openModal={openModal} closeModal={closeModal} modalInfo={modalInfo}/>
      {
        orderStatus
          ? <OrderCompleted />          
          : <>
              <OrderForm setOrderStatus={setOrderStatus}/>
              <OrderBasket />
            </>
      }
      {renderModal(modalInfo, openModal, closeModal)}
    </div>



  )
}

export default OrderPage;

