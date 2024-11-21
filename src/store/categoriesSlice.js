import { createSlice } from '@reduxjs/toolkit';
import { categoriesInitialState } from './initialStates/categoriesInitialState';

const initialState = categoriesInitialState;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
