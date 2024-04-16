import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { myAPI } from "./api";


export const store = configureStore({
    reducer: {
        //Add generated reducer ad top-level Slice
        [myAPI.reducerPath]:myAPI.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myAPI.middleware)
})

setupListeners(store.dispatch)