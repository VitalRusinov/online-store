import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './MainPage.module.scss';
import ProductsOfTheDay from './ProductsOfTheDay/ProductsOfTheDay';
import Categories from './Categories/Categories';
import Stripes from './Stripes/Stripes'
import Blog from './Blog/Blog';
import Menu from '../Menu/Menu.jsx';
import Footer from './Footer/Footer';

import getModal from '../Modals/index.js';


//Перенести открытие модалок в отдельный элемент, для избежания будлирования и тп
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

const MainPage = () => {

  const [modalInfo, setModalInfo] = useState({ type: null, payload: null });

  const openModal = (type, payload = null) => setModalInfo({ type, payload });
  const closeModal = () => setModalInfo({ type: null, payload: null });
  
  return (
    <div className={styles.main_container}>
      <Menu openModal={openModal} closeModal={closeModal} modalInfo={modalInfo}/>
      <ProductsOfTheDay openModal={openModal}/>
      <Categories openModal={openModal}/>
      <Stripes />
      <Blog />
      <Footer />
      {renderModal(modalInfo, openModal, closeModal)}
    </div>
  )
};

export default MainPage;
