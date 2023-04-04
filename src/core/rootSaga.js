import { all } from "redux-saga/effects";
import { moviesSaga } from "../feature/Movie/moviesSaga";

export default function* rootSaga() {
  yield all([moviesSaga()]);
}
