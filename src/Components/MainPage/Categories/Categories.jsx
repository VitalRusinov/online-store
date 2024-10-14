import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Categories.module.scss";
import CategoryCard from "./CategoryCard/CategoryCard";
import ProductCard from "./ProductCard/ProductCard";
import MoreButton from "../../Buttons/MoreButton/MoreButton";
import Filter from "./Filter/Filter";
import { getPrice } from "../../../utils";

const Categories = () => {
  const [activeCategoryIdent, setActiveCategoryIdent] = useState(null);
  const [productsCount, setProductsCount] = useState(5);

  const [fullListPrices, setFullListPrices] = useState([]);
  //Состояния фильтра
  const [colorsFilter, setColorsFilter] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    //Изменяет кол-во отображаемого товара
    setProductsCount(5);
    //console.log(activeCategoryIdent, 'activeCategoryIdent');
  }, [activeCategoryIdent]);

  const categoriesList = useSelector((state) => state.categories.entries);
  const fullProductsList = useSelector(
    (state) => state[activeCategoryIdent]?.entries,
  );
  const priceFiltered = fullProductsList
    ?.filter((prod) => getPrice(prod.price) <= maxPrice)
    .filter((prod) => getPrice(prod.price) >= minPrice);
  const filteredList = priceFiltered?.filter((prod) =>
    colorsFilter?.includes(prod.color),
  );
  const productsList = filteredList?.slice(0, productsCount);

  useEffect(() => {
    if (fullProductsList) {
      const prices = fullProductsList.map((product) => getPrice(product.price));
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
      setFullListPrices([minPrice, maxPrice]);

      const colors = fullProductsList.map((product) => product.color);
      setColorsFilter(colors);
    }
  }, [fullProductsList]);

  return (
    <div className={styles.cat_container} id="categories">
      <h2>Категории</h2>
      <div className={styles.categoriesList}>
        {categoriesList.map((category) => {
          return (
            <div key={category.id}>
              <CategoryCard
                category={category}
                activeCategoryIdent={activeCategoryIdent}
                setActiveCategoryIdent={setActiveCategoryIdent}
              />
            </div>
          );
        })}
      </div>
      {productsList && (
        <div className={styles.filter_container}>
          <Filter
            products={fullProductsList}
            colorsFilter={colorsFilter}
            setColorsFilter={setColorsFilter}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            fullListPrices={fullListPrices}
          />
          <div className={styles.products_count}>
            {/* слова через i18*/}
            <span>{filteredList.length} позиция(й) в категории</span>
          </div>
        </div>
      )}
      <div className={styles.productsList}>
        {productsList &&
          productsList.map((product) => {
            return (
              <div key={product.id} className={styles.productCard}>
                <ProductCard prod={product} />
              </div>
            );
          })}
      </div>
      {productsList && filteredList?.length > productsList?.length && (
        <MoreButton
          productsCount={productsCount}
          setProductsCount={setProductsCount}
        />
      )}
    </div>
  );
};

export default Categories;
