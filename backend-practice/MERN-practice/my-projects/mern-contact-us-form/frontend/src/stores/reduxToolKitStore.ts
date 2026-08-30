import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "../services/form-slice";


export const reduxRTKStore = configureStore({
    reducer: {
        [formSlice.reducerPath]: formSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(formSlice.middleware)
});


