// NOTE to begin using reduce max recommends using the redux toolkit. To use this run 'npm install @reduxjs/toolkit react-redux'
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
