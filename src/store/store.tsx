import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "../features/MissionsSlice";

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
