import { useEffect } from 'react';
import styles from './MobileModalProductsList.module.scss';
import MobileProductCard from './MobileProductCard/MobileProductCard';


const MobileModalProductsList = ({list, activeCategory, setActiveCategory}) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={styles.container}>
      {list &&
        <>
          <button onClick={() => setActiveCategory(null)} className={styles.close_button}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2712_5002)">
                <path d="M21 1L1 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 1L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_2712_5002">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className={styles.name}>
            <span>{activeCategory?.name?.firstLine + ' ' + activeCategory?.name?.secondLine}</span>
          </div>
          <div className={styles.product_list}>
            {list.map(product => {
              return (
                <div key={product.id} className={styles.mobile_productCard}>
                  <MobileProductCard prod={product} />
                </div>
              )
            })}
          </div>
        </>
      }
    </div>    
  )
}

export default MobileModalProductsList;
