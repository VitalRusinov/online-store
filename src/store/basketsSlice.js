import { createSlice, current } from '@reduxjs/toolkit';
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
