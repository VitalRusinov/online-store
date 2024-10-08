import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../utils";

const userData = getUserData();

const initialState = {
  entries: [userData],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.entries.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
