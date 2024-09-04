import { createSlice } from '@reduxjs/toolkit';
import { lampsInitialState } from './initialStates/lampsInitialState';

const initialState = lampsInitialState;

const lampsSlice = createSlice({
  name: 'lamps',
  initialState,
  reducers: {},
});

export const {} = lampsSlice.actions;

export default lampsSlice.reducer;