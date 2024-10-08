import React, { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.scss";

import modalTypes from "../Modals/modalTypes";
import { pages } from "../../utils";

const Menu = () => {
  const { modalInfo, openModal, closeModal } = useContext(ModalContext);

  const location = useLocation(); // Получаем текущее местоположение

  const toggleModal = (type) => {
    modalInfo.type === type ? closeModal() : openModal(type);
  };

  const searchClick = (type) => {
    if (location.pathname !== pages.search) {
      toggleModal(type);
    }
    return;
  };

  return (
    <div className={styles.menu_container}>
      <Link
        to={`${pages.main}#productsOfTheDay`}
        className={styles.label_container}
      >
        <span className={styles.label}>Elfen Lied</span>
      </Link>
      <Link to={`${pages.main}#categories`} className={styles.catalog}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="2.99902" r="3" fill="white" />
          <circle cx="12" cy="2.99902" r="3" fill="white" />
          <circle cx="12" cy="11.999" r="3" fill="white" />
          <circle cx="3" cy="11.999" r="3" fill="white" />
        </svg>
        <span>Каталог</span>
      </Link>
      <div className={styles.central_panel}>
        <Link to={`${pages.main}#blog`} className={styles.blog}>
          <span>Блог</span>
        </Link>
        <div className={styles.contacts}>
          <button onClick={() => openModal(modalTypes.contacts)}>
            <span>Контакты</span>
          </button>
        </div>
      </div>
      <div className={styles.search}>
        <button onClick={() => searchClick(modalTypes.search)}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 23L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Поиск</span>
        </button>
      </div>
      <div className={styles.personalAccount}>
        <div className={styles.likes}>
          <button onClick={() => toggleModal(modalTypes.liked)}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.884 0C13.893 0 12.111 0.988764 11 2.50562C9.889 0.988764 8.107 0 6.116 0C2.739 0 0 2.80899 0 6.2809C0 7.61798 0.209 8.85393 0.572 10C2.31 15.618 7.667 18.9775 10.318 19.8989C10.692 20.0337 11.308 20.0337 11.682 19.8989C14.333 18.9775 19.69 15.618 21.428 10C21.791 8.85393 22 7.61798 22 6.2809C22 2.80899 19.261 0 15.884 0Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className={styles.auth}>
          <button onClick={() => toggleModal(modalTypes.auth)}>
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 5C14 7.76142 11.7614 10 9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5ZM0 19.5C0 15.36 4.0396 13 9 13C13.9604 13 18 15.36 18 19.5C18 20.585 17.4157 21 16.5149 21H1.48515C1.07905 21 0 21 0 19.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className={styles.basket}>
          <button onClick={() => toggleModal(modalTypes.basket)}>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.71513 2.69L3.51817 5.14C3.47877 5.61 3.84315 6 4.30601 6H19.3833C19.7969 6 20.1416 5.68 20.1712 5.26C20.2992 3.49 18.9697 2.05 17.2266 2.05H5.12339C5.02491 1.61 4.82795 1.19 4.52266 0.84C4.03026 0.31 3.3409 0 2.63184 0H0.918289C0.51452 0 0.179688 0.34 0.179688 0.75C0.179688 1.16 0.51452 1.5 0.918289 1.5H2.63184C2.93713 1.5 3.22273 1.63 3.42953 1.85C3.63634 2.08 3.73482 2.38 3.71513 2.69ZM9.17969 20C9.17969 21.1046 8.28426 22 7.17969 22C6.07512 22 5.17969 21.1046 5.17969 20C5.17969 18.8954 6.07512 18 7.17969 18C8.28426 18 9.17969 18.8954 9.17969 20ZM17.1797 20C17.1797 21.1046 16.2843 22 15.1797 22C14.0751 22 13.1797 21.1046 13.1797 20C13.1797 18.8954 14.0751 18 15.1797 18C16.2843 18 17.1797 18.8954 17.1797 20ZM4.32925 8H19.4005C19.8623 8 20.216 8.37818 20.1767 8.82424L19.8525 13.3527C19.7444 14.8073 18.4475 16 16.9738 16H6.04859C4.36854 16 3.05202 14.5842 3.18956 12.9261L3.54326 8.70788C3.58256 8.3103 3.9166 8 4.32925 8Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
