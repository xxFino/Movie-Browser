import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectMoviesByQuery,
  selectMoviesStatus,
  selectTotalPages,
} from "./moviesSlice";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { MoviesList } from "./MoviesList";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { useEffect } from "react";
import { Pagination } from "../../core/components/Pagination";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const Movies = ({ page }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const dispatch = useDispatch();
  const moviesStatus = useSelector(selectMoviesStatus);
  const movies = useSelector((state) => selectMoviesByQuery(state, query));
  const pages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  return {
    noResult: <NoResult />,
    loading: <Loading />,
    success: (
      <Container>
        <MoviesList status={moviesStatus} movies={movies} />
        <Pagination totalPages={pages} />
      </Container>
    ),
    error: <Error />,
  }[moviesStatus];
};
