import { useEffect } from 'react';
import styles from './MobileModalProductsList.module.scss';
import MobileProductCard from './MobileProductCard/MobileProductCard';

import { ReactComponent as CloseButton } from '../../../../assets/svg/CloseButton.svg';

const MobileModalProductsList = ({
  list,
  activeCategory,
  setActiveCategory,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.container}>
      {list && (
        <>
          <button
            onClick={() => setActiveCategory(null)}
            className={styles.close_button}
          >
            <CloseButton />
          </button>
          <div className={styles.name}>
            <span>
              {activeCategory?.name?.firstLine +
                ' ' +
                activeCategory?.name?.secondLine}
            </span>
          </div>
          <div className={styles.product_list}>
            {list.map((product) => {
              return (
                <div key={product.id} className={styles.mobile_productCard}>
                  <MobileProductCard prod={product} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default MobileModalProductsList;
