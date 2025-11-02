// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import viewerReducer from "../slices/slice";

// Configuration du store Redux avec le slice "viewer"

const store = configureStore({
  reducer: {
    viewer: viewerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
