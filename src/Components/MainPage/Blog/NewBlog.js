import React, { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard'; // Компонент карточки

const NewsSlider = ({ news }) => {
  const [visibleCards, setVisibleCards] = useState(0); // Сколько карточек влезает на экран
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущего слайда
  const containerRef = useRef(null); // Ссылка на контейнер с карточками

  // Функция для пересчёта количества видимых карточек
  const calculateVisibleCards = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 300; // Допустим, ширина одной карточки — 300px
      const maxVisible = Math.floor(containerWidth / cardWidth);
      setVisibleCards(maxVisible);
    }
  };

  // Пересчёт при загрузке и изменении размеров окна
  useEffect(() => {
    calculateVisibleCards();
    window.addEventListener('resize', calculateVisibleCards);
    return () => window.removeEventListener('resize', calculateVisibleCards);
  }, []);

  // Переход на предыдущий слайд с циклической навигацией
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? news.length - visibleCards : prevIndex - 1
    );
  };

  // Переход на следующий слайд с циклической навигацией
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= news.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="news-slider">
      <button onClick={handlePrev} className="slider-button">
        ⬅
      </button>

      <div className="cards-container" ref={containerRef}>
        <div
          className="cards-wrapper"
          style={{
            display: 'flex',
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            transition: 'transform 0.3s ease',
          }}
        >
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>

      <button onClick={handleNext} className="slider-button">
        ➡
      </button>
    </div>
  );
};

export default NewsSlider;
