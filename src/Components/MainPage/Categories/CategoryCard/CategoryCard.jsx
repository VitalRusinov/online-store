import { useSelector } from 'react-redux';
import styles from './CategoryCard.module.scss';
import classNames from 'classnames';

const CategoryCard = ({category, activeCategoryIdent, setActiveCategoryIdent}) => {
  const { id, image, name, categoryIdent } = category;

  const handleClick = () => {
    if (categoryIdent === activeCategoryIdent) {
      setActiveCategoryIdent(null);
      return;
    }
    setActiveCategoryIdent(categoryIdent);
    return;
  }

  const fullProductsList = useSelector((state) => state[categoryIdent].entries);

  let categoryCardClasses = classNames(styles.categoriesCard, (categoryIdent === activeCategoryIdent ? styles.active : ''));

  return (
    <div key = {id} className={categoryCardClasses} onClick={handleClick}>
      {/* key под вопросом */}
      <div>
        <svg width="388" height="462" viewBox="0 0 388 462" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M83.6289 455.625C98.8589 469.226 121.265 458.556 132.088 441.241C146.648 417.948 169.193 403 194.5 403C219.626 403 242.029 417.735 256.598 440.741C267.533 458.011 290.025 468.583 305.196 454.884C355.264 409.675 388 334.764 388 250C388 243.069 382.224 237.709 375.336 236.937C355.438 234.707 337.984 226.446 330.992 211.451C321.908 191.971 330.108 169.463 348.347 150.371C357.937 140.333 362.795 125.802 356.517 113.42C321.885 45.1273 262.032 0 194 0C86.8568 0 0 111.929 0 250C0 335.229 33.0956 410.496 83.6289 455.625Z" fill="#CBB6FF" />
        </svg>
      </div>
      <button className={styles.cat_button}>
        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_105_578)">
            <path d="M27.2734 22.6667C26.2134 22.6667 24.6306 23.7051 23.302 24.7562C21.5877 26.1077 20.092 27.7227 18.9506 29.5743C18.0949 30.9627 17.2734 32.6457 17.2734 34M17.2734 34C17.2734 32.6457 16.452 30.9612 15.5963 29.5743C14.4534 27.7227 12.9577 26.1077 11.2463 24.7562C9.9163 23.7051 8.33058 22.6667 7.27344 22.6667M17.2734 34L17.2734 -1.11265e-06" strokeWidth="2" strokeLinecap="round" />
          </g>
          <defs>
            <clipPath id="clip0_105_578">
              <rect width="34" height="34" fill="white" transform="translate(34.2734 34) rotate(-180)" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className={styles.cat_prodCount}>
        <div className={styles.cat_prodCount_text}>
          <p>
            {fullProductsList.length}
            <span> шт</span>
          </p>   
        </div>     
      </div>
      <div className={styles.inscription}>
      <svg width="389" height="462" viewBox="0 0 389 462" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="ellipsePath" d="M 194.5,231 m -169.5,0 a 169.5,206 0 1,1 339,0 a 169.5,206 0 1,1 -339,0"/>
        </defs>
        <g transform="rotate(-223 194.5 231)">
          <text fontWeight="500" fontSize="16px" letterSpacing="0.08em">
            <textPath href="#ellipsePath" startOffset="50%">
              изготовление на заказ
            </textPath>
          </text>
        </g>
      </svg>
      </div>
      <div className={styles.img_container}>
        <img src={image} alt="Изображение категории" loading="lazy"/>
      </div>
      <div className={styles.category_name}>
        <p>{name.firstLine}</p>
        <p>{name.secondLine}</p>
      </div>
    </div>
  )
};

export default CategoryCard;
