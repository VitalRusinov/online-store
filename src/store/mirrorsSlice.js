import { createSlice } from '@reduxjs/toolkit';
import { mirrorsInitialState } from './initialStates/mirrorsInitialState';

const initialState = mirrorsInitialState;

const mirrorsSlice = createSlice({
  name: 'mirrors',
  initialState,
  reducers: {},
});

export const {} = mirrorsSlice.actions;

export default mirrorsSlice.reducer;