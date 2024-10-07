import styles from './OrderCompleted.module.scss';
import lamp_01 from '../../../assets/pictures/lamps/lamp_01.png';
import lamp_02 from '../../../assets/pictures/lamps/lamp_02.png';
import lamp_03 from '../../../assets/pictures/lamps/lamp_03.png';
import lamp_04 from '../../../assets/pictures/lamps/lamp_04.png';
import lamp_05 from '../../../assets/pictures/lamps/lamp_05.png';

const OrderCompleted = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg_span}>
        <span>Thank you</span>
        <span>Thank you</span>
        <span>Thank you</span>
      </div>
      <div className={styles.span}>
        <span>Ваш заказ оформлен</span>
        <span>Спасибо за заказ</span>
      </div>
      <div className={styles.big_pic}>
        <img src={lamp_01} alt="" />
      </div>
      <div className={`${styles.small_pic} ${styles.pic2}`}>
        <img src={lamp_02} alt="" />
      </div>
      <div className={`${styles.small_pic} ${styles.pic3}`}>
        <img src={lamp_03} alt="" />
      </div>
      <div className={`${styles.small_pic} ${styles.pic4}`}>
        <img src={lamp_04} alt="" />
      </div>
      <div className={`${styles.small_pic} ${styles.pic5}`}>
        <img src={lamp_05} alt="" />
      </div>
    </div>
  )
}

export default OrderCompleted;

/*
//здесь импортируются сразу все изображения

// ImageGallery.js
import React from 'react';

// Функция для импорта всех изображений из папки
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} style={{ width: '200px', margin: '10px' }} />
      ))}
    </div>
  );
};

export default ImageGallery;
*/