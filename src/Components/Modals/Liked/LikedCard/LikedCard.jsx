import classNames from "classnames";
import styles from "./LikedCard.module.scss";
import { useDispatch } from "react-redux";
import { removeLike } from "../../../../store/likesSlice";
import { getUserData } from "../../../../utils";

import { ReactComponent as Like } from '../../../../assets/svg/Like.svg';

const LikedCard = ({ prod }) => {
  const dispatch = useDispatch();
  const { email } = getUserData();

  const { id, image, color, name, product, price } = prod;

  const ellipseClass = classNames(styles.ellipse, styles[color]);

  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img src={image} alt="Изображение товара" loading="lazy" />
      </div>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.name}>
              <div className={ellipseClass}></div>
              <span>{name}</span>
            </div>
            <div className={styles.product}>
              <span>{product}</span>
            </div>
          </div>
          <button
            className={styles.likeButton}
            onClick={() => dispatch(removeLike({ email, id }))}
          >
            <Like />
          </button>
        </div>
        <hr />
        <div className={styles.price}>
          <span className={styles.numbers}>{price}</span>
          <span className={styles.ruble}>&#x20bd;</span>
        </div>
      </div>
    </div>
  );
};

export default LikedCard;
