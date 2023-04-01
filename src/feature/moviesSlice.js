import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesLoading(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action) {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesError(state, action) {
      state.movies = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesError, fetchMoviesLoading, fetchMoviesSuccess } =
  moviesSlice.actions;

export default moviesSlice.reducer;
