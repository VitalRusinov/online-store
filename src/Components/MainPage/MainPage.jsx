import styles from './MainPage.module.scss';



const MainPage = () => {

  return (
    <div className={styles.main_container}>
      <div className={styles.productsOfTheDayContainer}>
        <div className={styles.productOfTheDay}>Product 1</div>
        <div className={styles.productOfTheDay}>Product 2</div>
        <div className={styles.productOfTheDay}>Product 3</div>
      </div>
    </div>
  )
};

export default MainPage;