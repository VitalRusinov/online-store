import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './MainPage.module.scss';
import ProductsOfTheDay from './ProductsOfTheDay/ProductsOfTheDay';
import Categories from './Categories/Categories';

const MainPage = () => {
  
  return (
    <div className={styles.main_container}>
      <ProductsOfTheDay />
      <Categories />
    </div>
  )
};

export default MainPage;

/*
    {
      id: 'lamp_01',
      image: Santa_Trinita,
      product: 'Лампа настольная',
      name: 'Santa Trinita',
      article: 'GNM001',
      color: 'Лаванда',
      description: 'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
      designer: 'Benjamin Moor',
      size: {
        height: '60см'
      },
      price: 150000
    },
    */