import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './MainPage.module.scss';
import ProductsOfTheDay from './ProductsOfTheDay/ProductsOfTheDay';
import Categories from './Categories/Categories';
import Stripes from './Stripes/Stripes'
import Blog from './Blog/Blog';

const MainPage = () => {
  
  return (
    <div className={styles.main_container}>
      <ProductsOfTheDay />
      <Categories />
      <Stripes />
      <Blog />
    </div>
  )
};

export default MainPage;
