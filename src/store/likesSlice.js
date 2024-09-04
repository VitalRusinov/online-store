import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: [],
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.likes.push(action.payload);//поменять
    },
  },
});

export const { addUser } = likesSlice.actions;

export default likesSlice.reducer;