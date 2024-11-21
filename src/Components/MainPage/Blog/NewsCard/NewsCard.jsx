import React from "react";
import styles from "./NewsCard.module.scss";

import { ReactComponent as BlogCard } from '../../../../assets/svg/BlogCard.svg';

const NewsCard = ({ news }) => {
  const { id, author, name, date, readingTime, image } = news;

  return (
    <div className={styles.newsCard_container}>
      <div>
        <BlogCard />
      </div>
      <div className={styles.readingTime}>
        <p className={styles.count}>{readingTime.count}</p>
        <p className={styles.measurement}>{readingTime.measurement}</p>
      </div>
      <div className={styles.img_container}>
        <img src={image} alt="Картинка статьи" loading="lazy" />
      </div>
      <div className={styles.number}>
        <span>{id}</span>
      </div>
      <div className={styles.author}>
        <span>{author}</span>
      </div>
      <div className={styles.name}>
        <p>{name.str_1}</p>
        <p>{name.str_2}</p>
        <p>{name.str_3}</p>
      </div>
      <div className={styles.date}>
        <p>
          {date.day} {date.month}
        </p>
        <p>{date.year}</p>
      </div>
    </div>
  );
};

export default NewsCard;
