import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../../../../store/usersSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './UserInfo.module.scss';
import { getStorageItem, removeStorageItem, setStorageItem } from '../../../../../utils';
import ModalTypes from '../../ModalTypes';

import ExitButton from './ExitButton/ExitButton';


const UserInfo = ({openModal, closeModal}) => {

  const user = JSON.parse(getStorageItem());
  // Функция, вызываемая при отправке формы
  const handleSubmit = () => {
    removeStorageItem();
    openModal(ModalTypes.auth);
  };

  return (
    <div className={styles.userInfo}>
      <div>      
        <h2>User:</h2>
        <p>{user.email}</p>
      </div>
      <button 
        className={styles.closeButton}
        onClick={closeModal}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="2" x2="16" y2="16" stroke="white" strokeWidth="2"/>
          <line x1="2" y1="16" x2="16" y2="2" stroke="white" strokeWidth="2"/>
        </svg>
      </button>
      <ExitButton handleSubmit={handleSubmit}/>
    </div>
  );
};

export default UserInfo;
