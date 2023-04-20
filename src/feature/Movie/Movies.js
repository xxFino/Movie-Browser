import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectMoviesByQuery,
  selectMoviesStatus,
  selectPage,
  selectTotalPages,
  setPage,
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

export const Movies = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const dispatch = useDispatch();
  const moviesStatus = useSelector(selectMoviesStatus);
  const movies = useSelector((state) => selectMoviesByQuery(state, query));
  const page = useSelector(selectPage) ?? 1;
  const totalPages = useSelector(selectTotalPages);

  const onPrevPageClick = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };
  
  const onNextPageClick = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };
console.log(totalPages)
  useEffect(() => {
    dispatch(fetchMovies(page));
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
        onPrevClick={onPrevPageClick}
        onNextClick={onNextPageClick}
        />
      </Container>
    ),
    error: <Error />,
  }[moviesStatus];
};
