import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../slices/index"; 
import authReducer from "../slices"

// STORE  
const store = configureStore({
    reducer: {
        // Replace 'cart' and 'product' with the name of your auth reducer
        auth: authReducer
    }
});

export  default store ;
