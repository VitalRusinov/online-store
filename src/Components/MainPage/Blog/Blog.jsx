import { useSelector } from 'react-redux';
import styles from './Blog.module.scss';
import NewsCard from './NewsCard/NewsCard'


const Blog = () => {
  const newsList = useSelector((state) => state.news.entries);

  return (
    <div className={styles.blog_container} id='blog'>
      <div className={styles.blog_header}>
        <div className={styles.title}>
          <div className={styles.dots}>
            <div className={styles.primary_dot}></div>
            <div className={styles.secondary_dot}></div>
            <div className={styles.secondary_dot}></div>
          </div>
          <h2>Блог</h2>
        </div>
        <div className={styles.pages}>
          <span>02</span>
          <hr />
          <span>04</span>
        </div>
      </div>
      <div className={styles.blog_body}>
      {newsList && newsList.map((news) => {
        return (
          <div key={news.id}>
            <NewsCard news={news}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Blog;