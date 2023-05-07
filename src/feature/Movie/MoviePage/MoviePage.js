import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../../Content/Loading";
import { Error } from "../../Content/Error";
import {
  fetchMoviePage,
  selectMoviePageStatus,
  setMoviePageId,
} from "./moviePageSlice";
import { MoviePageDetails } from "./MoviePageDetails";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const status = useSelector(selectMoviePageStatus);

  useEffect(() => {
    dispatch(fetchMoviePage());
    dispatch(setMoviePageId(id));
  }, [id, dispatch]);

  return {
    loading: <Loading />,
    success: <MoviePageDetails />,
    error: <Error />,
  }[status];
};
