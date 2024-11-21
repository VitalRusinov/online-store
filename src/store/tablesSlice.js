import { createSlice } from '@reduxjs/toolkit';
import { tablesInitialState } from './initialStates/tablesInitialState';

const initialState = tablesInitialState;

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
});

export default tablesSlice.reducer;
