import React, { useEffect } from 'react';
import styles from './YandexMap.module.scss';

const YandexMap = () => {
  useEffect(() => {
    window.ymaps.ready(init);

    function init() {
      const map = new window.ymaps.Map('map', {
        center: [55.755325, 37.646093], // Центрируем на Хохловский переулок, д.11 стр. 3
        zoom: 14, // Масштаб для подробного отображения
        controls: [] // Убираем все элементы управления
      }, {
        suppressMapOpenBlock: true // Убираем кнопку "Открыть в Яндекс.Картах"
      });

      // Добавляем кастомный маркер (розовый бублик)
      const customPlacemark = new window.ymaps.Placemark([55.755325, 37.646093], {
        balloonContent: 'Москва, Хохловский переулок, д.11 стр. 3',
      }, {
        iconLayout: 'default#image',
        iconImageHref: '/images/image.png', // Путь к локальному изображению
        iconImageSize: [70, 96], // Размер иконки
        iconImageOffset: [-35, -92], // Смещение иконки, чтобы острие указывало точно на точку
      });

      // Добавляем метку на карту
      map.geoObjects.add(customPlacemark);
    }
  }, []);

  return (
    <div id="map" className={styles.map}></div>
  );
};

export default YandexMap;
