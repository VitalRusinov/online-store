import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './Components/MainPage/MainPage'
import pages from './utils/pages';

function App() {
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
