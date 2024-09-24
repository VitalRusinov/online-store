import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './MainPage.module.scss';
import ProductsOfTheDay from './ProductsOfTheDay/ProductsOfTheDay';
import Categories from './Categories/Categories';
import Stripes from './Stripes/Stripes'
import Blog from './Blog/Blog';
import Menu from './Menu/Menu'

const MainPage = () => {
  
  return (
    <div className={styles.main_container}>
      <Menu />
      <ProductsOfTheDay />
      <Categories />
      <Stripes />
      <Blog />
    </div>
  )
};

export default MainPage;
