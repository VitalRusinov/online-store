import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './ProductsOfTheDay.module.scss';
import BuyButton from '../../Buttons/BuyButton/BuyButton';

import modalTypes from '../Modals/ModalTypes';

const ProductsOfTheDay = ({openModal}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const productsOfTheDayList = useSelector((state) => state.productsOfTheDay.entries);

  const getProductOfTheDayClasses = (product) => classNames(styles.productOfTheDay, {
    [styles.active]: product === activeProduct,
    [styles.inactive]: product !== activeProduct && activeProduct !== null,
    }
  );

  let slidesCount = 0;

  return (
    <div className={styles.productsOfTheDayContainer}>
      {productsOfTheDayList.map(product => {
        slidesCount += 1;
        const {id, designer, image, name, description, price} = product;
        return (
          <div 
            onMouseEnter={() => {
              setActiveProduct(product);
            }}
            onMouseLeave={() => setActiveProduct(null)}
            onClick={() => openModal(modalTypes.productCard, product)}
            className={getProductOfTheDayClasses(product)}
            key={id}
          >
            <div className={styles.designer_container}>
              <p className={styles.designer_product}>Товар дня</p>
              <span className={styles.designer}>{designer}</span>
            </div>
            <div className={styles.img_container}>
              <img className={styles.image} src={image} alt="Изображение продукта" />
            </div>
            <div className={styles.description}>
              <p>{name}</p>
              <span>{description}</span>
              <hr />
              <div>
                <span className={styles.price}>{price}</span>
                <span className={styles.ruble}>&#x20bd;</span>
              </div>
            </div>
            <div className={styles.button_Container}>
              <BuyButton />
            </div>
            <div className={styles.slides_Container}>
              <p>Слайд</p>
              <span>{slidesCount}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default ProductsOfTheDay;

/*
    {
      id: 'lamp_01',
      image: Santa_Trinita,
      product: 'Лампа настольная',
      name: 'Santa Trinita',
      article: 'GNM001',
      color: 'Лаванда',
      description: 'Функциональная дизайнерская лампа для создания максимально комфортного освещения',
      designer: 'Benjamin Moor',
      size: {
        height: '60см'
      },
      price: 150000
    },
    */