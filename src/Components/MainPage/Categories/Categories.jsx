import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Categories.module.scss';
import CategoryCard from './CategoryCard/CategoryCard';
import ProductCard from './ProductCard/ProductCard';
import MoreButton from '../../Buttons/MoreButton/MoreButton';


const Categories = () => {

  const [activeCategoryIdent, setActiveCategoryIdent] = useState(null);
  const [productsCount, setProductsCount] = useState(5)

  useEffect(() => {
    //Изменяет кол-во отображаемого товара
    setProductsCount(5);
    console.log(activeCategoryIdent, 'activeCategoryIdent');
  }, [activeCategoryIdent]);

  const categoriesList = useSelector((state) => state.categories.entries);
  const fullProductsList = useSelector((state) => state[activeCategoryIdent]?.entries);

  const productsList = fullProductsList?.slice(0, productsCount);

  useEffect(() => {
    console.log(productsList, 'productList');
  }, [productsList]);

  return (
    <div className={styles.cat_container}>
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
          )
        })}
      </div>
      {productsList && <div className={styles.filter_container}>
        <div className={styles.filter}>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1623 0H1.38455C1.08986 0 0.807248 0.116448 0.598875 0.323727C0.390501 0.531005 0.273438 0.812136 0.273438 1.10527V3.96793C0.273438 4.54598 0.510104 5.11409 0.921215 5.52304L6.9401 11.5103V19.8949C6.94032 20.0832 6.98885 20.2683 7.0811 20.4328C7.17335 20.5972 7.30627 20.7355 7.46726 20.8346C7.62826 20.9336 7.81201 20.9902 8.00111 20.9988C8.19021 21.0075 8.37841 20.968 8.54788 20.8841L12.9923 18.6736C13.369 18.4857 13.6068 18.1032 13.6068 17.6843V11.5103L19.6257 5.52304C20.0368 5.11409 20.2734 4.54598 20.2734 3.96793V1.10527C20.2734 0.812136 20.1564 0.531005 19.948 0.323727C19.7396 0.116448 19.457 0 19.1623 0Z" fill="#D9FF5A"/>
          </svg>
          <span>фильтры</span>
        </div>
        <div className={styles.products_count}>
          {/* здесь изменить количество динамически, а слова через i18*/}
          <span>20 позиций в категории</span>          
        </div>
      </div>}
      <div className={styles.productsList}>
        {productsList && productsList.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard prod={product}/>
            </div>
          )
        })}
      </div>
      {productsList && <MoreButton />}
    </div>
  )
};

export default Categories;
