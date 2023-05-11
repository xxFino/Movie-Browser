import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularData, getQueryData } from "../../core/getData";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload: page, query }) {
  try {
    const [people] = yield all([
      call(getPopularData, "person", page),
      call(getQueryData, "person", page, query),
    ]);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield delay(500);
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
