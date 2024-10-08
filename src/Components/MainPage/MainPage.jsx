import React from "react";

import styles from "./MainPage.module.scss";
import ProductsOfTheDay from "./ProductsOfTheDay/ProductsOfTheDay";
import Categories from "./Categories/Categories";
import Stripes from "./Stripes/Stripes";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import RenderModal from "../Modals/RenderModal.jsx";

const MainPage = () => {
  return (
    <div className={styles.main_container}>
      <ProductsOfTheDay />
      <Categories />
      <Stripes />
      <Blog />
      <Footer />
      <RenderModal />
    </div>
  );
};

export default MainPage;
