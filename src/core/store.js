import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../feature/moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
