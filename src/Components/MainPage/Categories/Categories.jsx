import { useSelector } from 'react-redux';
import styles from './Categories.module.scss';
import CategoriesCard from './CategoriesCard/CategoriesCard';

const Categories = () => {

  const categoriesList = useSelector((state) => state.categories.entries);

  return (
    <div className={styles.cat_container}>
      <h2>Категории</h2>
      <div className={styles.categoriesList}>
        {categoriesList.map((category) => {
          return (
            <div key={category.id}>
              <CategoriesCard category={category}/>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Categories;
