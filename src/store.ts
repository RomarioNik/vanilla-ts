import { configureStore } from "@reduxjs/toolkit";
import { counterReduser } from "./starter/09-rtk/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
