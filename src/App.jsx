import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import _ from "lodash";

import MainPage from './Components/MainPage/MainPage'
import OrderPage from './Components/OrderPage/OrderPage';
import SearchPage from './Components/SearchPage/SearchPage';

import {getUserData, setUserData, pages, } from './utils';

const ScrollToSection = () => {
  const location = useLocation();

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
			<Routes>
				<Route path={pages.main} element={<MainPage />} />
				<Route path={pages.order} element={<OrderPage />} />
        <Route path={pages.search} element={<SearchPage />} />
				{/*				

				<Route path={pages.main} element={<OrderPage />} />
				*/}

			</Routes>
		</BrowserRouter>
  );
}

export default App;
