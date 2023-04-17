import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { getMoviesData, getGenres } from "../../core/getData";
import {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenres,
} from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    yield delay(1000);
    const [movies, genres] = yield all([call(getMoviesData), call(getGenres)]);
    yield put(fetchMoviesSuccess(movies));
    yield put(fetchGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
