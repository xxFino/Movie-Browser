import { all } from "redux-saga/effects";
import { moviesSaga } from "../feature/moviesSaga";

export default function* rootSaga() {
  yield all([moviesSaga()]);
}
