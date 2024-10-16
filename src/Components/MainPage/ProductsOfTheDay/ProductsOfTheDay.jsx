import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./ProductsOfTheDay.module.scss";
import BuyButton from "../../Buttons/BuyButton/BuyButton";

import modalTypes from "../../Modals/modalTypes";
import ModalContext from "../../../context/ModalContext";
import { getPrice } from "../../../utils";
import { useGetAllProducts } from "../../../hooks/useGetAllProducts";

const ProductsOfTheDay = () => {
  const { openModal } = useContext(ModalContext);

  const [activeProduct, setActiveProduct] = useState(null);

  const allProducts = useGetAllProducts()

  const productsOfTheDayIdList = useSelector((state) => state.productsOfTheDay.entries);

  const productsOfTheDayList = [];
  productsOfTheDayIdList.forEach((id) => {
    const prodById = allProducts.find((prod) => prod.id === id);
    productsOfTheDayList.push(prodById);
  });

  const getProductOfTheDayClasses = (product) =>
    classNames(styles.productOfTheDay, {
      [styles.active]: product === activeProduct,
      [styles.inactive]: product !== activeProduct && activeProduct !== null,
    });

  let slidesCount = 0;
  let mobileslidesCount = 0;

  const formattedSliceCount = (num) => {
    return String(num).padStart(2, '0');
  }


  return (
    <div className={styles.productsOfTheDayContainer} id="productsOfTheDay">
      <div className={styles.desctop}>
        {productsOfTheDayList.map((product) => {
          slidesCount += 1;
          const { id, designer, image, name, description, price } = product;
          const finishPrice = getPrice(price);

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
                <img
                  className={styles.image}
                  src={image}
                  alt="Изображение продукта"
                  loading="lazy"
                />
              </div>
              <div className={styles.description}>
                <p>{name}</p>
                <span>{description}</span>
                <hr />
                <div className={styles.price_container}>
                  <span className={styles.price}>{finishPrice}</span>
                  <span className={styles.ruble}>&#x20bd;</span>
                </div>
              </div>
              <div className={styles.button_Container}>
                <BuyButton id={id} />
              </div>
              <div className={styles.slides_Container}>
                <p>Слайд</p>
                <span>{formattedSliceCount(slidesCount)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.mobile}>
        {productsOfTheDayList.map((product) => {
          mobileslidesCount += 1;
          const { id, designer, image, name, description, price } = product;
          const finishPrice = getPrice(price);

          return (
            <div
              onClick={() => openModal(modalTypes.productCard, product)}
              className={styles.product_mobile}
              key={id}
            >
              <div className={styles.designer_container_mobile}>
                <span className={styles.designer}>{designer}</span>
                <p className={styles.designer_product}>Товар дня</p>
              </div>
              <div className={styles.img_container}>
                <img
                  className={styles.image}
                  src={image}
                  alt="Изображение продукта"
                  loading="lazy"
                />
              </div>
              <div className={styles.description}>
                <p>{name}</p>
                <span>{description}</span>
                <hr />
                <div className={styles.price_container}>
                  <span className={styles.price}>{finishPrice}</span>
                  <span className={styles.ruble}>&#x20bd;</span>
                </div>
              </div>
              <div className={styles.button_Container}>
                <BuyButton id={id} />
              </div>
              <div className={styles.slides_Container}>
                <span>{formattedSliceCount(mobileslidesCount)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsOfTheDay;
