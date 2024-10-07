import styles from './SearchProducts.module.scss';
import ProductCard from '../../MainPage/Categories/ProductCard/ProductCard';

const SearchProducts = ({productsList, openModal}) => {
  return (
    <div className={styles.productsList}>
      {productsList && productsList.map((product) => {
        return (
          <div key={product.id} className={styles.productCard}>
            <ProductCard prod={product} openModal={openModal}/>
          </div>
        )
      })}
    </div>
  )
}

export default SearchProducts;