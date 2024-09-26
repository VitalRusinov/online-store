import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log('ADDuSER');
      state.entries.push(action.payload); // поменять
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;