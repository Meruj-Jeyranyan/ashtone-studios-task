import { configureStore } from "@reduxjs/toolkit";
import postReducer from "features/postSlice";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    // immutableCheck: false,
    // serializableCheck: false,
  });

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),

  devTools: true, // Enable the Redux DevTools extension.
});
