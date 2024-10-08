import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./Filter.module.scss";

const Filter = ({
  products,
  colorsFilter,
  setColorsFilter,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  fullListPrices,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = products?.reduce((acc, product) => {
    const { color } = product;
    if (!acc[color]) acc[color] = 0;
    acc[color]++;
    return acc;
  }, {});

  const handleMinChange = (e) => {
    const value = e.target.value.replace(/\s/g, "").replace(/[^\d]/g, "");
    const numberValue = value ? Math.min(Number(value), maxPrice) : 0;
    setMinPrice(numberValue);
  };

  const handleMaxChange = (e) => {
    const value = e.target.value.replace(/\s/g, "").replace(/[^\d]/g, "");
    const numberValue = value ? Math.max(Number(value), minPrice) : 0;
    setMaxPrice(numberValue);
  };

  const handleSliderChange = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleColorChange = (color) => {
    if (colorsFilter.includes(color)) {
      setColorsFilter(colorsFilter.filter((col) => col !== color));
    } else {
      setColorsFilter([...colorsFilter, color]);
    }
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className={styles.filter}>
      <div className={styles.label} onClick={toggleFilter}>
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9444 0H1.05556C0.775605 0 0.50712 0.110903 0.309165 0.308311C0.11121 0.505719 0 0.773462 0 1.05264V3.77898C0 4.32951 0.224834 4.87056 0.615389 5.26004L6.33333 10.9622V18.9475C6.33354 19.1269 6.37964 19.3032 6.46728 19.4598C6.55492 19.6164 6.68119 19.7481 6.83413 19.8424C6.98708 19.9368 7.16164 19.9906 7.34129 19.9989C7.52093 20.0071 7.69972 19.9695 7.86072 19.8896L12.0829 17.7844C12.4408 17.6054 12.6667 17.2412 12.6667 16.8422V10.9622L18.3846 5.26004C18.7752 4.87056 19 4.32951 19 3.77898V1.05264C19 0.773462 18.8888 0.505719 18.6908 0.308311C18.4929 0.110903 18.2244 0 17.9444 0ZM10.8648 9.78218C10.7666 9.87977 10.6887 9.99576 10.6357 10.1235C10.5826 10.2512 10.5554 10.3881 10.5556 10.5264V16.1917L8.44444 17.2443V10.5264C8.44465 10.3881 8.41742 10.2512 8.36434 10.1235C8.31126 9.99576 8.23338 9.87977 8.13517 9.78218L2.11111 3.77898V2.10528H16.8899L16.8921 3.77161L10.8648 9.78218Z"
            fill="#D9FF5A"
          />
        </svg>
        <span>фильтры</span>
      </div>
      {isOpen && (
        <div className={styles.filter_menu}>
          <div className={styles.price}>
            <label>Цена</label>
            <div className={styles.price_inputs}>
              <input
                type="text"
                value={`от ${formatPrice(minPrice)}`}
                onChange={handleMinChange}
              />
              <input
                type="text"
                value={`до ${formatPrice(maxPrice)}`}
                onChange={handleMaxChange}
              />
            </div>
            <Slider
              range
              min={fullListPrices[0]}
              max={fullListPrices[1]}
              value={[minPrice, maxPrice]}
              onChange={handleSliderChange}
              step={1000}
              styles={{
                rail: { backgroundColor: "white", height: 3, borderRadius: 72 }, // Задний трек
                track: {
                  backgroundColor: "#D9FF5A",
                  height: 3,
                  borderRadius: 72,
                }, // Активный трек
                handle: {
                  width: 25,
                  height: 25,
                  marginTop: -8, // Центрирование ползунка относительно трека
                  backgroundColor: "#D9FF5A", // Внутренний круг (первый цвет)
                  borderRadius: "50%",
                  border: "5px solid #AE97E8", // Среднее кольцо толщиной 5px (второй цвет)
                  boxShadow: "0 0 0 2px #D9FF5A", // Внешнее кольцо толщиной 2px (первый цвет)
                },
              }}
            />
            <div className={styles.price_display}>
              <span>{formatPrice(minPrice)}</span>
              <span>{formatPrice(maxPrice)}</span>
            </div>
          </div>

          <div className={styles.colors}>
            <label>Цвета</label>
            <ul className={styles.colors_list}>
              {Object.keys(colors).map((color) => (
                <li key={color} className={styles.checkboxItem}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      className={styles.checkboxInput}
                      checked={colorsFilter.includes(color)}
                      onChange={() => handleColorChange(color)}
                    />
                    <span className={styles.customCheckbox}></span>
                    {color} ({colors[color]})
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
