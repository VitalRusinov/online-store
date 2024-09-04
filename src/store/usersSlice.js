import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // поменять
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;