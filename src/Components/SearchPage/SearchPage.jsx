import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './SearchPage.module.scss';

import Menu from '../Menu/Menu.jsx';
import SearchForm from '../Modals/Search/SearchForm/SearchForm.jsx';
import NoSearchResult from './NoSearchResult/NoSearchResult';
import SearchProducts from './SearchProducts/SearchProducts';

import getModal from '../Modals/index.js';

const getFilteredList = (allProducts, str) => {
  return allProducts.filter(prod => {
    const productToLowerCase = prod.product.toLowerCase();
    const nameToLowerCase = prod.name.toLowerCase();
    const strToLowerCase = str.toLowerCase();
    return (productToLowerCase.includes(strToLowerCase) || nameToLowerCase.includes(strToLowerCase));
  });
}

//Перенести открытие модалок в отдельный элемент, для избежания дублирования и тп
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

const SearchPage = () => {
  const [searchProducts, setSearchProducts] = useState([]);

  const [modalInfo, setModalInfo] = useState({ type: null, payload: null });
  const openModal = (type, payload = null) => setModalInfo({ type, payload });
  const closeModal = () => setModalInfo({ type: null, payload: null });
  
  const location = useLocation(); // Получаем объект location
  const data = location.state; // Данные переданные через navigate

  //Получаем полный список товаров и выбираем те, которые подходят под поиск
  const chairs = useSelector((state) => state.chairs.entries);
  const lamps = useSelector((state) => state.lamps.entries);
  const mirrors = useSelector((state) => state.mirrors.entries);
  const tables = useSelector((state) => state.tables.entries);
  const allProducts = [...chairs, ...lamps, ...mirrors, ...tables];

  useEffect(() => {
    const filtered = getFilteredList(allProducts, data);
    setSearchProducts(filtered);
  }, []);
  
  const handleSubmit = (str) => {
    const filtered = getFilteredList(allProducts, str);
    setSearchProducts(filtered);
  };

  // дублируется код
  return (
    <div className={styles.container}>
      <Menu openModal={openModal} closeModal={closeModal} modalInfo={modalInfo}/>
      <SearchForm string={data} submit={handleSubmit}/>
      <h2>Результаты поиска</h2>
      <div className={styles.searchResults}>
        {searchProducts.length === 0
          ? <NoSearchResult />
          : <SearchProducts productsList={searchProducts} openModal={openModal}/>
        }
      </div>      
      {renderModal(modalInfo, openModal, closeModal)}
    </div>
  );
};

export default SearchPage;
