import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchPage.module.scss";

import SearchForm from "../Modals/Search/SearchForm/SearchForm.jsx";
import NoSearchResult from "./NoSearchResult/NoSearchResult";
import SearchProducts from "./SearchProducts/SearchProducts";
import RenderModal from "../Modals/RenderModal.jsx";
import { useGetAllProducts } from "../../hooks/useGetAllProducts.js";

const getFilteredList = (allProducts, str) => {
  return allProducts.filter((prod) => {
    const productToLowerCase = prod.product.toLowerCase();
    const nameToLowerCase = prod.name.toLowerCase();
    const strToLowerCase = str.toLowerCase();
    return (
      productToLowerCase.includes(strToLowerCase) ||
      nameToLowerCase.includes(strToLowerCase)
    );
  });
};

const SearchPage = () => {
  const [searchProducts, setSearchProducts] = useState([]);

  const location = useLocation(); // Получаем объект location
  const data = location.state; // Данные переданные через navigate

  //Получаем полный список товаров и выбираем те, которые подходят под поиск
  const allProducts = useGetAllProducts();

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
      <SearchForm string={data} submit={handleSubmit} />
      <h2>Результаты поиска</h2>
      <div className={styles.searchResults}>
        {searchProducts.length === 0 ? (
          <NoSearchResult />
        ) : (
          <SearchProducts productsList={searchProducts} />
        )}
      </div>
      <RenderModal />
    </div>
  );
};

export default SearchPage;
