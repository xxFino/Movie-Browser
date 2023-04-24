import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import moviesReducer from "../feature/Movie/moviesSlice";
import peopleReducer from "../feature/People/peopleSlice";
import actorReducer from "../feature/People/ActorPage/ActorSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
    movies: moviesReducer,
    actor: actorReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;