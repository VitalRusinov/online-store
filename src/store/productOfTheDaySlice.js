import { createSlice } from '@reduxjs/toolkit';
import { productsOfTheDayInitialState } from './initialStates/productsOfTheDayInitialState';

const initialState = productsOfTheDayInitialState;

const productsOfTheDaySlice = createSlice({
  name: 'productsOfTheDay',
  initialState,
  reducers: {},
});

export const {} = productsOfTheDaySlice.actions;

export default productsOfTheDaySlice.reducer;