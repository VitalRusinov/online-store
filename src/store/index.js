import { configureStore } from '@reduxjs/toolkit';
import chairsReducer from './chairsSlice.js';
import lampsReducer from './lampsSlice.js';
import mirrorsReducer from './mirrorsSlice.js';
import productsOfTheDayReducer from './productsOfTheDaySlice.js';
import tablesReducer from './tablesSlice.js';
import usersReducer from './usersSlice.js';
import likesReducer from './likesSlice.js';
import categoriesReducer from './categoriesSlice.js';
import newsReducer from './newsSlice.js';
import basketsReducer from './basketsSlice.js';


export default configureStore({
  reducer: {
    chairs: chairsReducer,
    lamps: lampsReducer,
    mirrors: mirrorsReducer,
    tables: tablesReducer,
    productsOfTheDay: productsOfTheDayReducer,
    likes: likesReducer,
    users: usersReducer,
    categories: categoriesReducer,
    news: newsReducer,
    baskets: basketsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});