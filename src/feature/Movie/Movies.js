import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovies,
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
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
import { useState } from "react";
import { getQueryData } from "../../core/getData";

export const Movies = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const dispatch = useDispatch();
  const moviesStatus = useSelector(selectMoviesStatus);
  const movies = useSelector(selectMovies);
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    query
      ? getQueryData("movie", query).then(setSearchResults)
      : dispatch(fetchMovies({ page: 1 }));
  }, [dispatch, query]);

  const onPageChange = (page) => (
    setPage(page), dispatch(fetchMovies({ page }))
  );

  return {
    loading: <Loading />,
    error: <Error />,
    noResult: <NoResult />,
    success: (
      <Container>
        <MoviesList
          status={moviesStatus}
          movies={query ? searchResults : movies}
        />
        {movies > 20 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </Container>
    ),
  }[moviesStatus];
};
