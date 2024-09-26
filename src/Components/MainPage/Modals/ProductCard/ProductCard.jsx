import styles from './ProductCard.module.scss';

const ProductCard = ({modalInfo, closeModal}) => {
  return (
    <div className={styles.productCard}>
      <span>info</span>
      <button onClick={() => closeModal()}>
        Close
      </button>
    </div>
  )
}

export default ProductCard;