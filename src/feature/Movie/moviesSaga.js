import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { getPopularData, getGenres } from "../../core/getData";
import {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenres,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload }) {
  try {
    yield delay(1000);
    const page = payload.page;
    const [movies, genres] = yield all([
      call(getPopularData, "movie", page),
      call(getGenres),
    ]);
    yield put(fetchMoviesSuccess(movies));
    yield put(fetchGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
