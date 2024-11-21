import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import MainPage from './Components/MainPage/MainPage';
import OrderPage from './Components/OrderPage/OrderPage';
import SearchPage from './Components/SearchPage/SearchPage';

import { pages } from './utils';
import Menu from './Components/Menu/Menu';

const ScrollToSection = () => {
  const location = useLocation();

  //Прокрутка к нужному блоку при нажатии на кнопку меню
  useEffect(() => {
    // Проверяем, есть ли якорь (hash) в URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Menu />
      <Routes>
        <Route path={pages.main} element={<MainPage />} />
        <Route path={pages.order} element={<OrderPage />} />
        <Route path={pages.search} element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
