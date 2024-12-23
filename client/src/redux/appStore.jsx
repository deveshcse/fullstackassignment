import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/studentApiSlice";
export const appStore = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
});
