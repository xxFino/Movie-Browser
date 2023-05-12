import { createSlice } from "@reduxjs/toolkit";
import { initial } from "lodash";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    totalResults: 0,
    totalPages: 0,
    status: "initial",
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.movies = payload.movies;
      state.status = "success";
      state.totalPages = payload.totalPages;
      state.totalResults = payload.totalResults;

      if (payload.totalResults === 0) {
        state.status = "noResults";
      } else {
        state.status = "success";
      }
      if (payload.totalPages > 500) {
        state.totalPages = 500;
      } else {
        state.totalPages = payload.totalPages;
      }
    },

    fetchMoviesError: (state) => {
      state.movies = null;
      state.status = "error";
    },
    fetchGenres: (state, action) => {
      state.genres = action.payload.genres;
    },
  },
});

export const {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenres,
  setPage,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovieTotalPages = (state) =>
  selectMoviesState(state).totalPages;
export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export const selectMovieTotalResults = (state) =>
  selectMoviesState(state).totalResults;
export default moviesSlice.reducer;
