import styles from "./NoSearchResult.module.scss";
import No_results from "./No_results.png";

const NoSearchResult = () => {
  return (
    <div className={styles.container}>
      <span>No results</span>
      <div className={styles.img_container}>
        <img src={No_results} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default NoSearchResult;
