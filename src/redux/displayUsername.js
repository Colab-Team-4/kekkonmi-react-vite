import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: "displayUsername",
  initialState: {
    nameOfUser: "",
  },
  reducers: {
    changeUsernameDisplay: (state, action) => {
      state.nameOfUser = action.payload;
    },
  },
});

export const { changeUsernameDisplay } = usernameSlice.actions;

export default usernameSlice.reducer;
