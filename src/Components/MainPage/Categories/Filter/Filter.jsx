import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './Filter.module.scss';

import { ReactComponent as FilterSVG } from '../../../../assets/svg/Filter.svg';

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
    const value = e.target.value.replace(/\s/g, '').replace(/[^\d]/g, '');
    const numberValue = value ? Math.min(Number(value), maxPrice) : 0;
    setMinPrice(numberValue);
  };

  const handleMaxChange = (e) => {
    const value = e.target.value.replace(/\s/g, '').replace(/[^\d]/g, '');
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
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className={styles.filter}>
      <div className={styles.label} onClick={toggleFilter}>
        <FilterSVG />
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
                rail: { backgroundColor: 'white', height: 3, borderRadius: 72 }, // Задний трек
                track: {
                  backgroundColor: '#D9FF5A',
                  height: 3,
                  borderRadius: 72,
                }, // Активный трек
                handle: {
                  width: 25,
                  height: 25,
                  marginTop: -8, // Центрирование ползунка относительно трека
                  backgroundColor: '#D9FF5A', // Внутренний круг (первый цвет)
                  borderRadius: '50%',
                  border: '5px solid #AE97E8', // Среднее кольцо толщиной 5px (второй цвет)
                  boxShadow: '0 0 0 2px #D9FF5A', // Внешнее кольцо толщиной 2px (первый цвет)
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
