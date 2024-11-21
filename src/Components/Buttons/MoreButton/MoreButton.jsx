import React from 'react';
import styles from './MoreButton.module.scss';
import classNames from 'classnames';

import { ReactComponent as MoreArrow } from '../../../assets/svg/MoreArrow.svg';

const MoreButton = ({ productsCount, setProductsCount }) => {
  const ellipseFrontClasses = classNames(styles.ellipse, styles.ellipse_front);

  return (
    <button
      className={styles.button_container}
      onClick={() => setProductsCount(productsCount + 10)}
    >
      <div className={ellipseFrontClasses}></div>
      <p className={styles.text}>Загрузить ещё</p>
      <div className={styles.icon}>
        <MoreArrow />
      </div>
    </button>
  );
};

export default MoreButton;
