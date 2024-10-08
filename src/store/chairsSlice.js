import { createSlice } from "@reduxjs/toolkit";
import { chairsInitialState } from "./initialStates/chairsInitialState";

const initialState = chairsInitialState;

const chairsSlice = createSlice({
  name: "chairs",
  initialState,
  reducers: {},
});

export default chairsSlice.reducer;
