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
      <div className={styles.desctop_container}>
        <Link
          to={`${pages.main}#productsOfTheDay`}
          className={styles.label_container}
        >
          <span className={styles.label}>Elfen Lied</span>
        </Link>
        <Link to={`${pages.main}#categories`} className={styles.catalog}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 18 18"
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
        <div className={styles.mobile_container}>
          <Link
            to={`${pages.main}#productsOfTheDay`}
            className={styles.label_container}
          >
            <span className={styles.label}>Elfen Lied</span>
          </Link>
          <div className={styles.icons}>
            <button onClick={() => searchClick(modalTypes.search)}>
              <svg
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
            </button>
            <button onClick={() => toggleModal(modalTypes.liked)} className={styles.likes}>
              <svg
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
            <button onClick={() => toggleModal(modalTypes.auth)} className={styles.auth}>
              <svg
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
            <button onClick={() => toggleModal(modalTypes.basket)} className={styles.basket}>
              <svg
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
            <button onClick={() => openModal(modalTypes.contacts)} className={styles.mobile_contacts}>
              <svg viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6777 17.963C22.6777 18.359 22.5896 18.766 22.4023 19.162C22.215 19.558 21.9727 19.932 21.6532 20.284C21.1134 20.878 20.5185 21.307 19.8465 21.582C19.1855 21.857 18.4694 22 17.6983 22C16.5746 22 15.3738 21.736 14.1069 21.197C12.84 20.658 11.5731 19.932 10.3172 19.019C9.05029 18.095 7.84949 17.072 6.70377 15.939C5.56907 14.795 4.54453 13.596 3.63016 12.342C2.72681 11.088 1.99972 9.834 1.47092 8.591C0.942131 7.337 0.677734 6.138 0.677734 4.994C0.677734 4.246 0.809933 3.531 1.07433 2.871C1.33873 2.2 1.75735 1.584 2.34123 1.034C3.04629 0.341 3.81744 0 4.63267 0C4.94113 0 5.24959 0.0660001 5.52501 0.198C5.81144 0.33 6.06482 0.528 6.26311 0.814L8.81895 4.411C9.01724 4.686 9.16046 4.939 9.25961 5.181C9.35876 5.412 9.41384 5.643 9.41384 5.852C9.41384 6.116 9.33672 6.38 9.18249 6.633C9.03928 6.886 8.82996 7.15 8.56557 7.414L7.72831 8.283C7.60713 8.404 7.55205 8.547 7.55205 8.723C7.55205 8.811 7.56306 8.888 7.5851 8.976C7.61815 9.064 7.6512 9.13 7.67323 9.196C7.87153 9.559 8.21304 10.032 8.69776 10.604C9.19351 11.176 9.7223 11.759 10.2952 12.342C10.8901 12.925 11.4629 13.464 12.0468 13.959C12.6196 14.443 13.0934 14.773 13.4679 14.971C13.523 14.993 13.5891 15.026 13.6662 15.059C13.7543 15.092 13.8425 15.103 13.9416 15.103C14.1289 15.103 14.2721 15.037 14.3933 14.916L15.2306 14.091C15.506 13.816 15.7704 13.607 16.0238 13.475C16.2771 13.321 16.5305 13.244 16.8059 13.244C17.0152 13.244 17.2356 13.288 17.4779 13.387C17.7203 13.486 17.9737 13.629 18.2491 13.816L21.8956 16.401C22.182 16.599 22.3803 16.83 22.5015 17.105C22.6116 17.38 22.6777 17.655 22.6777 17.963Z" fill="white" />
              </svg>
            </button>
          </div>          
      </div>      
    </div>
  );
};

export default Menu;
