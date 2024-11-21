import React, { useContext } from 'react';

import styles from './UserInfo.module.scss';
import { getUserData, removeUserData } from '../../../../utils';
import ModalTypes from '../../modalTypes';

import ExitButton from './ExitButton/ExitButton';
import ModalContext from '../../../../context/ModalContext';
import { addNewUserBasket } from '../../../../store/basketsSlice';
import { useDispatch } from 'react-redux';

import { ReactComponent as CloseButton } from '../../../../assets/svg/CloseButton.svg';

const UserInfo = () => {
  const dispatch = useDispatch();

  const { openModal, closeModal } = useContext(ModalContext);

  const user = getUserData();
  // Функция, вызываемая при отправке формы
  const handleSubmit = () => {
    removeUserData();
    dispatch(addNewUserBasket());
    openModal(ModalTypes.auth);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div>
          <h2>User:</h2>
          <p>{user.email}</p>
        </div>
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseButton />
        </button>
        <ExitButton handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default UserInfo;
