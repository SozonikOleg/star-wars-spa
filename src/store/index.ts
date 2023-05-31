import { configureStore, combineReducers } from "@reduxjs/toolkit";
import heroReducer from "./slices/heroSlice";

const rootReducer = combineReducers({
  hero: heroReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
