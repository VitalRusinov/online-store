/*import { createSlice, current } from '@reduxjs/toolkit';
import { getUserData, setUserData } from '../utils';
import _ from 'lodash';

const user = getUserData();
const {email, basket} = user;
const cloneUser = _.cloneDeep(user);

const initialState = {
  entities: {[email]: basket},
};

const basketsSlice = createSlice({
  name: 'baskets',
  initialState,
  reducers: {
    addProduct(state, action) {
      const { id } = action.payload;
      if(!state.entities[email][id]) {
        state.entities[email][id] = {count: 0}
      //а также обновляем данные в сессионСторадж
      cloneUser.basket[id] = {count: 0};
      }
      state.entities[email][id].count += 1;
      //а также обновляем данные в сессионСторадж
      cloneUser.basket[id].count += 1;
      setUserData(cloneUser);
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      delete state.entities[email][id];
      //а также обновляем данные в сессионСторадж
      delete cloneUser.basket[id];
      setUserData(cloneUser);      
    },
    decrementProduct: (state, action) => {
      const { id } = action.payload;
      state.entities[email][id].count -= 1;
      //а также обновляем данные в сессионСторадж
      cloneUser.basket[id].count -= 1;
      setUserData(cloneUser);
    },
  },
});

export const { addProduct, decrementProduct, removeProduct } = basketsSlice.actions;

export default basketsSlice.reducer;
*/

import { createSlice } from '@reduxjs/toolkit';
import { getUserData, setUserData } from '../utils';

const user = getUserData();
const { email, basket } = user;

const initialState = {
  entities: {
    [email]: basket, // Инициализация пустого объекта, если корзина не существует
  },
};

const basketsSlice = createSlice({
  name: 'baskets',
  initialState,
  reducers: {
    addNewUserBasket(state) {
      const { email, basket } = getUserData();
      state.entities[email] = basket;
    },
    addProduct(state, action) {
      const { id } = action.payload;

      // Проверяем, что корзина для email существует, иначе создаем ее как объект
      if (!state.entities[email]) {
        state.entities[email] = {};
      }

      // Проверяем, что продукт с этим id существует в корзине, иначе инициализируем его как объект
      if (!state.entities[email][id]) {
        state.entities[email][id] = { count: 0 };
      }

      // Увеличиваем количество продукта
      state.entities[email][id].count += 1;

      // Обновляем данные в sessionStorage
      setUserData({
        ...user,
        basket: state.entities[email],
      });
    },

    removeProduct(state, action) {
      const { id } = action.payload;

      // Проверяем существование продукта перед удалением
      if (state.entities[email] && state.entities[email][id]) {
        delete state.entities[email][id];

        // Обновляем данные в sessionStorage
        setUserData({
          ...user,
          basket: state.entities[email],
        });
      }
    },

    decrementProduct(state, action) {
      const { id } = action.payload;

      // Проверяем существование продукта и его количества
      if (
        state.entities[email] &&
        state.entities[email][id] &&
        state.entities[email][id].count > 0
      ) {
        state.entities[email][id].count -= 1;

        // Обновляем данные в sessionStorage
        setUserData({
          ...user,
          basket: state.entities[email],
        });
      }
    },
  },
});

export const { addNewUserBasket, addProduct, decrementProduct, removeProduct } =
  basketsSlice.actions;
export default basketsSlice.reducer;
