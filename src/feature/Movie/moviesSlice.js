import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    totalResults: 0,
    totalPages: 0,
    status: null,
  },
  reducers: {
    fetchMovies: (state, { payload: currentPage }) => {
      state.movies = null;
      state.currentPage = currentPage;
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
    },

    fetchMoviesError: (state) => {
      state.movies = null;
      state.status = "error";
    },
    fetchGenres: (state, action) => {
      state.genres = action.payload.genres;
    },
    setPage: (state, { payload: currentPage }) => {
      state.currentPage = currentPage;
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
export const selectPage = (state) => selectMoviesState(state).currentPage;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export default moviesSlice.reducer;
