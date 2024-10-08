import { createSlice } from '@reduxjs/toolkit';
import { getUserData, setUserData } from '../utils';

const userData = getUserData();
const {email, likes} = userData;

const initialState = {
  entities: {[email]: likes},
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    addLike(state, action) {
      const { id } = action.payload;
      if(!state.entities[email]) {
        state.entities[email] = [];
      }
      state.entities[email].push(id);
      //а также обновляем данные в сессионСторадж
      const newLikes = likes.slice(0);// создаем копию массива для возможности его изменить
      newLikes.push(id);
      userData.likes = newLikes;
      setUserData(userData);
    },
    removeLike: (state, action) => {
      const { id } = action.payload;
      state.entities[email] = state.entities[email]
        .filter(i => i !== id);
      //а также обновляем данные в сессионСторадж
      const filtered = likes.filter(i => i !== id);
      userData.likes = filtered;
      setUserData(userData);
    }
  },
});

export const { addLike, removeLike } = likesSlice.actions;

export default likesSlice.reducer;
