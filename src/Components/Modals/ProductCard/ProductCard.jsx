import { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './ProductCard.module.scss';

import { addLike, removeLike } from '../../../store/likesSlice';
import BuyButton from '../../Buttons/BuyButton/BuyButton';
import {
  getUserData,
  translateProp,
  translateColor,
  getPrice,
} from '../../../utils';
import ModalContext from '../../../context/ModalContext';

import { ReactComponent as CloseButton } from '../../../assets/svg/CloseButton.svg';

const ProductCard = () => {
  const { modalInfo, closeModal } = useContext(ModalContext);

  const { email } = getUserData();
  const likes = useSelector((state) => state.likes.entities[email]);
  const dispatch = useDispatch();

  const { payload } = modalInfo;
  const {
    id,
    image,
    name,
    article,
    color,
    description,
    designer,
    size,
    price,
  } = payload;

  const ellipseClass = classNames(styles.ellipse, styles[color]);
  const likeButtonClasses = classNames(
    styles.likeButton,
    likes?.includes(id) ? styles.like : styles.notLike
  );

  const params = Object.entries(size);

  const putLike = () => {
    if (likes?.includes(id)) {
      dispatch(removeLike({ id }));
    } else {
      dispatch(addLike({ id }));
    }
  };

  //Блокировка скролла основной страницы пока открыто это модальное окно
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.productCard}>
      <div className={styles.designer}>
        <span>{designer}</span>
      </div>
      <div className={styles.article}>
        <span>АРТ.</span>
        <span>{article}</span>
      </div>
      <div className={styles.color}>
        <span className={styles.text}>Цвет:</span>
        <div className={ellipseClass}></div>
        <span>{translateColor(color)}</span>
      </div>
      <div className={styles.description}>
        <span>{description}</span>
      </div>
      <div className={styles.img_container}>
        <img
          className={styles.image}
          src={image}
          alt="Изображение продукта"
          loading="lazy"
        />
      </div>
      <div className={styles.name}>
        <span>{name}</span>
      </div>
      <div className={styles.price}>
        <span className={styles.numbers}>{getPrice(price)}</span>
        <span className={styles.ruble}>&#x20bd;</span>
      </div>
      <button onClick={() => closeModal()} className={styles.closeButton}>
        <span>закрыть</span>
        <CloseButton />
      </button>
      <button className={likeButtonClasses} onClick={putLike}>
        <svg viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className={styles.path1}
            d="M30.5325 3.4754C29.7506 2.69063 28.8222 2.06809 27.8004 1.64335C26.7786 1.21861 25.6834 1 24.5774 1C23.4714 1 22.3762 1.21861 21.3544 1.64335C20.3326 2.06809 19.4042 2.69063 18.6223 3.4754L16.9996 5.10333L15.3769 3.4754C13.7975 1.89096 11.6554 1.00082 9.42177 1.00082C7.18818 1.00082 5.04607 1.89096 3.46668 3.4754C1.88729 5.05985 1 7.20882 1 9.44957C1 11.6903 1.88729 13.8393 3.46668 15.4237L5.0894 17.0517L16.9996 29L28.9098 17.0517L30.5325 15.4237C31.3148 14.6393 31.9353 13.708 32.3587 12.6829C32.7821 11.6579 33 10.5591 33 9.44957C33 8.33999 32.7821 7.24129 32.3587 6.21622C31.9353 5.19115 31.3148 4.25981 30.5325 3.4754Z"
          />
          <path
            className={styles.path2}
            d="M30.5325 3.4754L29.8241 4.18121L29.8244 4.18154L30.5325 3.4754ZM24.5774 1V2V1ZM18.6223 3.4754L19.3306 4.18138L19.3307 4.18121L18.6223 3.4754ZM16.9996 5.10333L16.2914 5.8093L16.9996 6.51981L17.7078 5.8093L16.9996 5.10333ZM15.3769 3.4754L14.6686 4.18138V4.18138L15.3769 3.4754ZM3.46668 15.4237L4.17492 14.7178H4.17492L3.46668 15.4237ZM5.0894 17.0517L4.38117 17.7576L4.38117 17.7576L5.0894 17.0517ZM16.9996 29L16.2914 29.706L16.9996 30.4165L17.7078 29.706L16.9996 29ZM28.9098 17.0517L29.618 17.7576V17.7576L28.9098 17.0517ZM30.5325 15.4237L29.8244 14.7176L29.8243 14.7178L30.5325 15.4237ZM31.2409 2.76959C30.3663 1.89176 29.3277 1.19523 28.1843 0.719951L27.4166 2.56675C28.3168 2.94095 29.1349 3.4895 29.8241 4.18121L31.2409 2.76959ZM28.1843 0.719951C27.0409 0.24467 25.8153 0 24.5774 0V2C25.5516 2 26.5164 2.19256 27.4166 2.56675L28.1843 0.719951ZM24.5774 0C23.3396 0 22.1139 0.244669 20.9705 0.719951L21.7382 2.56675C22.6384 2.19256 23.6032 2 24.5774 2V0ZM20.9705 0.719951C19.8272 1.19523 18.7885 1.89176 17.9139 2.76959L19.3307 4.18121C20.0199 3.4895 20.838 2.94095 21.7382 2.56675L20.9705 0.719951ZM17.9141 2.76943L16.2914 4.39735L17.7078 5.8093L19.3306 4.18138L17.9141 2.76943ZM17.7078 4.39735L16.0851 2.76943L14.6686 4.18138L16.2914 5.8093L17.7078 4.39735ZM16.0851 2.76943C14.3184 0.997092 11.9216 0.000821292 9.42177 0.000821292V2.00082C11.3891 2.00082 13.2765 2.78482 14.6686 4.18138L16.0851 2.76943ZM9.42177 0.000821292C6.92193 0.000821292 4.52512 0.997092 2.75844 2.76943L4.17492 4.18138C5.56702 2.78482 7.45443 2.00082 9.42177 2.00082V0.000821292ZM2.75844 2.76943C0.991874 4.54166 0 6.94464 0 9.44957H2C2 7.47301 2.78271 5.57805 4.17492 4.18138L2.75844 2.76943ZM0 9.44957C0 11.9545 0.991874 14.3575 2.75844 16.1297L4.17492 14.7178C2.78271 13.3211 2 11.4261 2 9.44957H0ZM2.75844 16.1297L4.38117 17.7576L5.79764 16.3457L4.17492 14.7178L2.75844 16.1297ZM4.38117 17.7576L16.2914 29.706L17.7078 28.294L5.79764 16.3457L4.38117 17.7576ZM17.7078 29.706L29.618 17.7576L28.2015 16.3457L16.2914 28.294L17.7078 29.706ZM29.618 17.7576L31.2407 16.1297L29.8243 14.7178L28.2015 16.3457L29.618 17.7576ZM31.2406 16.1299C32.1156 15.2525 32.8096 14.2109 33.283 13.0647L31.4344 12.3012C31.0611 13.2051 30.5139 14.0262 29.8244 14.7176L31.2406 16.1299ZM33.283 13.0647C33.7564 11.9185 34 10.6901 34 9.44957H32C32 10.4282 31.8078 11.3972 31.4344 12.3012L33.283 13.0647ZM34 9.44957C34 8.20907 33.7564 6.98066 33.283 5.83447L31.4344 6.59797C31.8078 7.50191 32 8.47091 32 9.44957H34ZM33.283 5.83447C32.8096 4.68828 32.1156 3.64668 31.2406 2.76926L29.8244 4.18154C30.5139 4.87294 31.0611 5.69402 31.4344 6.59797L33.283 5.83447Z"
            fill="#FFB1F7"
          />
        </svg>
      </button>
      <div className={styles.size}>
        {params.map(([prop, value]) => {
          return (
            <div key={prop}>
              <span>{translateProp(prop)}: </span>
              <span>{value}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.buy}>
        <BuyButton id={id} />
      </div>
    </div>
  );
};

export default ProductCard;
