import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "userIsLoggedIn",
  initialState: {
    isUserLoggedIn: false,
  },
  reducers: {
    userLoggedInTrue: (state) => {
      state.isUserLoggedIn = true;
    },
    userLoggedInFalse: (state) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { userLoggedInTrue, userLoggedInFalse } = loginSlice.actions;

export default loginSlice.reducer;
