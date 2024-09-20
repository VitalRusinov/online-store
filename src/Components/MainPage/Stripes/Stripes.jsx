import stripes from './stripes.png';
import styles from './Stripes.module.scss';

const Stripes = () => {
  return (
    <div className={styles.stripes}>
      <img src={stripes} alt="Полоски" />
    </div>
  )
}

export default Stripes;