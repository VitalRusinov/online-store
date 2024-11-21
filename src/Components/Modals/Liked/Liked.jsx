import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./Liked.module.scss";
import { getUserData } from "../../../utils";
import LikedCard from "./LikedCard/LikedCard";
import ModalContext from "../../../context/ModalContext";
import { useGetAllProducts } from "../../../hooks/useGetAllProducts";

import { ReactComponent as CloseButton } from '../../../assets/svg/CloseButton.svg';

const Liked = () => {
  const { closeModal } = useContext(ModalContext);

  const allProducts = useGetAllProducts();

  const { email } = getUserData();
  const likes = useSelector((state) => state.likes.entities[email]);

  const likedProducts = [];

  likes?.forEach((id) => {
    const prodById = allProducts.find((prod) => prod.id === id);
    likedProducts.push(prodById);
  });

  useEffect(() => {
    // Отключаем скролл основного окна при монтировании компонента
    if (window.innerWidth < 500) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []); 

  return (
    <div className={styles.container}>
      <div className={styles.liked}>
        <h2>Товары в избранном</h2>
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseButton />
        </button>
        <div className={styles.cards_container}>
          {likedProducts.map((product) => {
            return (
              <div key={product.id}>
                <LikedCard prod={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
  );
};

export default Liked;
