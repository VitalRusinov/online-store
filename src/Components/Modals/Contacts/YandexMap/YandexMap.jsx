import React, { useEffect } from "react";
import styles from "./YandexMap.module.scss";

const YandexMap = () => {
  useEffect(() => {
    // Проверяем, существует ли уже глобальный объект ymaps
    if (window.ymaps && window.ymaps.Map) {
      // Если API уже загружен, сразу инициализируем карту
      init();
    } else {
      // Проверяем, не был ли уже добавлен скрипт в head
      const existingScript = document.querySelector(
        'script[src^="https://api-maps.yandex.ru/2.1/"]',
      );

      if (!existingScript) {
        // Получаем API-ключ из переменной окружения
        const apiKey = process.env.REACT_APP_YANDEX_MAPS_API_KEY;

        // Создаем элемент <script> для подключения Яндекс.Карт
        const script = document.createElement("script");
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
        script.async = true; // Асинхронная загрузка скрипта

        // Добавляем <script> в <head> документа
        document.head.appendChild(script);

        // Когда скрипт загрузится, вызываем ymaps.ready
        script.onload = () => {
          window.ymaps.ready(init);
        };
      } else {
        // Если скрипт уже существует, просто ждем его полной загрузки
        existingScript.onload = () => {
          window.ymaps.ready(init);
        };
      }
    }

    function init() {
      const map = new window.ymaps.Map(
        "map",
        {
          center: [55.755325, 37.646093], // Центрируем на Хохловский переулок, д.11 стр. 3
          zoom: 14, // Масштаб для подробного отображения
          controls: [], // Убираем все элементы управления
        },
        {
          suppressMapOpenBlock: true, // Убираем кнопку "Открыть в Яндекс.Картах"
        },
      );

      // Добавляем кастомный маркер (розовый бублик)
      const customPlacemark = new window.ymaps.Placemark(
        [55.755325, 37.646093],
        {
          balloonContent: "Москва, Хохловский переулок, д.11 стр. 3",
        },
        {
          iconLayout: "default#image",
          iconImageHref: "/images/image.png", // Путь к локальному изображению
          iconImageSize: [70, 96], // Размер иконки
          iconImageOffset: [-35, -92], // Смещение иконки, чтобы острие указывало точно на точку
        },
      );

      // Добавляем метку на карту
      map.geoObjects.add(customPlacemark);
    }
  }, []);

  return <div id="map" className={styles.map}></div>;
};

export default YandexMap;
