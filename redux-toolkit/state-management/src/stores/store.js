import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { postsApi } from "../features/posts/post-slice";
import { jsonPlaceHolderAPI } from "../services/json-placeholder-api-slice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const reduxRTKStore = configureStore({
  reducer: {
    counter: counterReducer, // THIS "counter" is what useSelector sees
    [postsApi.reducerPath]: postsApi.reducer,
    [jsonPlaceHolderAPI.reducerPath]: jsonPlaceHolderAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(jsonPlaceHolderAPI.middleware),
});

