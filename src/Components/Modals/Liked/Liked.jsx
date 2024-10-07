import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Liked.module.scss';
import { getUserData } from '../../../utils';
import LikedCard from './LikedCard/LikedCard';

const Liked = ({openModal, closeModal}) => {

  const chairs = useSelector((state) => state.chairs.entries);
  const lamps = useSelector((state) => state.lamps.entries);
  const mirrors = useSelector((state) => state.mirrors.entries);
  const tables = useSelector((state) => state.tables.entries);
  const allProducts = [...chairs, ...lamps, ...mirrors, ...tables];
  
  const {email} = getUserData();
  const likes = useSelector((state) => state.likes.entities[email]);

  const likedProducts = [];
  likes.forEach(id => {
    const prodById = allProducts.find(prod => prod.id === id);
    likedProducts.push(prodById);
  })

  return (
    <div className={styles.liked}>
      <h2>Товары в избранном</h2>
      <button 
        className={styles.closeButton}
        onClick={closeModal}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="2" x2="16" y2="16" stroke="white" strokeWidth="2"/>
          <line x1="2" y1="16" x2="16" y2="2" stroke="white" strokeWidth="2"/>
        </svg>
      </button>
      <div className={styles.cards_container}>
        {likedProducts.map((product) => {
          return (
            <div key={product.id}>
              <LikedCard prod={product} />
            </div>
            )
          })}
      </div>
    </div>
  );
};

export default Liked;