import React, { useContext } from 'react';
import ModalContext from '../../context/ModalContext';
import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.scss';

import modalTypes from '../Modals/modalTypes';
import { pages } from '../../utils';

import { ReactComponent as MenuCategories } from '../../assets/svg/MenuCategories.svg';
import { ReactComponent as MenuSearch } from '../../assets/svg/MenuSearch.svg';
import { ReactComponent as MenuLike } from '../../assets/svg/MenuLike.svg';
import { ReactComponent as MenuAuth } from '../../assets/svg/MenuAuth.svg';
import { ReactComponent as MenuBasket } from '../../assets/svg/MenuBasket.svg';
import { ReactComponent as MenuContacts } from '../../assets/svg/MenuContacts.svg';

const Menu = () => {
  const { modalInfo, openModal, closeModal } = useContext(ModalContext);

  const location = useLocation();

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
          <MenuCategories />
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
            <MenuSearch />
            <span>Поиск</span>
          </button>
        </div>
        <div className={styles.personalAccount}>
          <div className={styles.likes}>
            <button onClick={() => toggleModal(modalTypes.liked)}>
              <MenuLike />
            </button>
          </div>
          <div className={styles.auth}>
            <button onClick={() => toggleModal(modalTypes.auth)}>
              <MenuAuth />
            </button>
          </div>
          <div className={styles.basket}>
            <button onClick={() => toggleModal(modalTypes.basket)}>
              <MenuBasket />
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
            <MenuSearch />
          </button>
          <button
            onClick={() => toggleModal(modalTypes.liked)}
            className={styles.likes}
          >
            <MenuLike />
          </button>
          <button
            onClick={() => toggleModal(modalTypes.auth)}
            className={styles.auth}
          >
            <MenuAuth />
          </button>
          <button
            onClick={() => toggleModal(modalTypes.basket)}
            className={styles.basket}
          >
            <MenuBasket />
          </button>
          <button
            onClick={() => openModal(modalTypes.contacts)}
            className={styles.mobile_contacts}
          >
            <MenuContacts />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
