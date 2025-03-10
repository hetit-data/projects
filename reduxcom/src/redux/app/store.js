import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice"
import authReducer from "../features/authSlice"

export const store =configureStore({

    reducer:{
        allcart:cartSlice,
        auth: authReducer,
    }
})