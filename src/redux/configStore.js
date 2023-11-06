import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./userIsRegistered";
import loginReducer from "./userIsLoggedIn";
import usernameReducer from "./displayUsername";

export default configureStore({
  reducer: {
    userIsRegistered: registerReducer,
    usernameIsLoggedIn: loginReducer,
    usernameIsDisplayed: usernameReducer,
  },
});
