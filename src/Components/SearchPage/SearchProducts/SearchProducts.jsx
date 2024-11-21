import styles from './SearchProducts.module.scss';
import ProductCard from '../../MainPage/Categories/ProductCard/ProductCard';
import MobileProductCard from '../../MainPage/Categories/MobileModalProductsList/MobileProductCard/MobileProductCard';

const SearchProducts = ({ productsList }) => {
  return (
    <>
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
      <div className={styles.mobileProductsList}>
        {productsList &&
          productsList.map((product) => {
            return (
              <div key={product.id} className={styles.mobileProductCard}>
                <MobileProductCard prod={product} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SearchProducts;
