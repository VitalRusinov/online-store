import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import _ from "lodash";

import MainPage from './Components/MainPage/MainPage'
import {getUserData, setUserData, pages, } from './utils';

const App = () => {

  return (
		<BrowserRouter>
			<Routes>
				<Route path={pages.main} element={<MainPage />} />
				{/*				
				<Route path={pages.search} element={<SearchPage />} />
				<Route path={pages.main} element={<OrderPage />} />
				*/}

			</Routes>
		</BrowserRouter>
  );
}

export default App;
