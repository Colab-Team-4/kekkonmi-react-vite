import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "userIsRegistered",
    initialState: {
        isUserRegistered: false,
    },
    reducers: {
        userRegisterTrue: (state) => {
            state.isUserRegistered = true;
        },
        userRegisterFalse: (state) => {
            state.isUserRegistered = false;
        }
    }
})

export const {userRegisterTrue, userRegisterFalse} = registerSlice.actions

export default registerSlice.reducer