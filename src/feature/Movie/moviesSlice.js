import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
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
    fetchGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { fetchMoviesError, fetchMovies, fetchMoviesSuccess,fetchGenres } =
  moviesSlice.actions;
const selectMoviesState = (state) => ({
  movies: state.movies.movies,
  status: state.movies.status,
  genres: state.movies.genres,
});

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesStatus = (state) => selectMoviesState(state).status;

export default moviesSlice.reducer;
