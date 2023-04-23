import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    totalResults: [],
    totalPages:[],
    page: 1,
    status: null,
  },
  reducers: {
    fetchMovies: (state, { payload: { page } }) => {
      state.movies = null;
      state.page = page;
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
    setPage: (state, { payload: page }) => {
      state.page = page;
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
export const selectPage = (state) => selectMoviesState(state).page;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export const selectTotalResults = (state) =>
  selectMoviesState(state).totalResults;
export const selectMoviesByQuery = (state, query) => {
  const movie = selectMovies(state);

  if (!query || query.trim() === "") {
    return movie;
  }
  return movie.filter(({ title }) =>
    title.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default moviesSlice.reducer;
