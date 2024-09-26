import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import _ from "lodash";

import MainPage from './Components/MainPage/MainPage'
import {getStorageItem, setStorageItem, pages, } from './utils';

const App = () => {

	//возможно  нужно добвать return, для удаления данных из локалсторадж, возможно
	useEffect(() => {
		const userData = JSON.parse(getStorageItem());
		if (!userData) {
			const email = _.uniqueId('guest_');
			setStorageItem({email, password: '', auth: false});
		}
	}, [])

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
