import React, { useContext } from "react";

import styles from "./UserInfo.module.scss";
import { getUserData, removeUserData } from "../../../../utils";
import ModalTypes from "../../modalTypes";

import ExitButton from "./ExitButton/ExitButton";
import ModalContext from "../../../../context/ModalContext";
import { addNewUserBasket } from "../../../../store/basketsSlice";
import { useDispatch } from "react-redux";

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
    <div className={styles.userInfo}>
      <div>
        <h2>User:</h2>
        <p>{user.email}</p>
      </div>
      <button className={styles.closeButton} onClick={closeModal}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="2" y1="2" x2="16" y2="16" stroke="white" strokeWidth="2" />
          <line x1="2" y1="16" x2="16" y2="2" stroke="white" strokeWidth="2" />
        </svg>
      </button>
      <ExitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default UserInfo;
