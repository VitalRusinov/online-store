import { createSlice } from '@reduxjs/toolkit';
import { productsOfTheDayInitialState } from './initialStates/productsOfTheDayInitialState';

const initialState = productsOfTheDayInitialState;

const productsOfTheDaySlice = createSlice({
  name: 'productsOfTheDay',
  initialState,
  reducers: {},
});

export default productsOfTheDaySlice.reducer;
