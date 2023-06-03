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

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
