import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMoviesByQuery,
  selectMoviesStatus,
} from "./moviesSlice";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { MoviesList } from "./MoviesList";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { useEffect } from "react";
import { Pagination } from "../../core/components/Pagination";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
import { useState } from "react";

export const Movies = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const dispatch = useDispatch();
  const moviesStatus = useSelector(selectMoviesStatus);
  const movies = useSelector((state) => selectMoviesByQuery(state, query));
  const [page, setPage] = useState(1);
  const totalPages = 500;

  const onPageChange = (page) => {
    setPage(page);
    dispatch(fetchMovies({ page }));
  };

  useEffect(() => {
    dispatch(fetchMovies({ page: page }));
  }, [dispatch, page]);

  return {
    noResult: <NoResult />,
    loading: <Loading />,
    success: (
      <Container>
        <MoviesList status={moviesStatus} movies={movies} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Container>
    ),
    error: <Error />,
  }[moviesStatus];
};
