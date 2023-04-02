import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "initial",
  },
  reducers: {
    fetchMovies: () => ({
      movies: null,
      status: "loading",
    }),
    fetchMoviesSuccess: (_, { payload: movies }) => ({
      movies,
      status: "success",
    }),
    fetchMoviesError: () => ({
      movies: null,
      status: "error",
    }),
  },
});

export const { fetchMoviesError, fetchMovies, fetchMoviesSuccess } =
  moviesSlice.actions;
const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesStatus = (state) => selectMoviesState(state).status;

export default moviesSlice.reducer;
