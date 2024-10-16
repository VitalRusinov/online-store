import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Categories.module.scss";
import CategoryCard from "./CategoryCard/CategoryCard";
import ProductCard from "./ProductCard/ProductCard";
import MoreButton from "../../Buttons/MoreButton/MoreButton";
import Filter from "./Filter/Filter";
import { getPrice } from "../../../utils";
import MobileModalProductsList from "./MobileModalProductsList/MobileModalProductsList";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [productsCount, setProductsCount] = useState(5);

  const [fullListPrices, setFullListPrices] = useState([]);
  //Состояния фильтра
  const [colorsFilter, setColorsFilter] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    //Изменяет кол-во отображаемого товара
    setProductsCount(5);
  }, [activeCategory]);

  const categoriesList = useSelector((state) => state.categories.entries);

  const fullProductsList = useSelector(
    (state) => state[activeCategory?.categoryIdent]?.entries,
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

  //чтоб экран не блокировался при открытии товаров
  const [isMobile, setIsMobile] = useState(false);

  // Функция для проверки размера экрана
  const handleResize = () => {
    setIsMobile(window.innerWidth < 500);
  };

  // Запускаем проверку при монтировании и при каждом изменении размера окна
  useEffect(() => {
    handleResize(); // Выполнить проверку при загрузке
    window.addEventListener('resize', handleResize); // Слушать изменение размера окна

    // Убираем слушатель при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.cat_container} id="categories">
      <h2>Категории</h2>
      <div className={styles.categoriesList}>
        {categoriesList.map((category) => {
          return (
            <div key={category.id}>
              <CategoryCard
                category={category}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
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
      {fullProductsList && isMobile &&
        <div className={styles.mobile_productsList}>
          <MobileModalProductsList 
            list={fullProductsList}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            />
        </div>
      }
      <div className={styles.more_Button}>
        {productsList && filteredList?.length > productsList?.length && (
          <MoreButton
            productsCount={productsCount}
            setProductsCount={setProductsCount}
          />
        )}
      </div>
    </div>
  );
};

export default Categories;
