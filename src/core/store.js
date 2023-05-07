import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import moviesReducer from "../feature/Movie/moviesSlice";
import peopleReducer from "../feature/People/peopleSlice";
import actorReducer from "../feature/People/ActorPage/actorSlice";
import moviePageReducer from "../feature/Movie/MoviePage/moviePageSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
    movies: moviesReducer,
    actor: actorReducer,
    moviePage: moviePageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;