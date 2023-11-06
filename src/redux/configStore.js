import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./userIsRegistered"

export default configureStore({
  reducer: {
    userIsRegistered: registerReducer
  },
});