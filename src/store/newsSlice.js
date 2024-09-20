import { createSlice } from '@reduxjs/toolkit';
import { newsInitialState } from './initialStates/newsInitialState';

const initialState = newsInitialState;

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;