import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  fetchMovies,
  fetchMoviesSuccess,
  selectMovieTotalPages,
  selectMovies,
  selectMoviesStatus,
} from "./moviesSlice";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { MoviesList } from "./MoviesList";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
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
  const totalPages = useSelector(selectMovieTotalPages);

  useEffect(() => {
    if (query) {
      getQueryData("movie", query, page).then((response) => {
        setSearchResults(response.results);
        dispatch(
          fetchMoviesSuccess({
            movies: response.results,
            totalPages: response.total_pages,
            totalResults: response.total_results,
          })
        );
      });
    } else {
      dispatch(fetchMovies({ page }));
    }
  }, [dispatch, query, page]);

  useEffect(() => {
    if (!query) {
      setPage(1);
    }
  }, [query]);

  const onPageChange = (page, query) => {
    setPage(page);
    dispatch(fetchMovies({ page, query }));
  };
  return (
    <>
      {moviesStatus === "loading" ? (
        <Loading />
      ) : moviesStatus === "error" ? (
        <Error />
      ) : query && searchResults.length === 0 ? (
        <NoResult />
      ) : (
        <Container>
          <MoviesList movies={query ? searchResults : movies} />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </Container>
      )}
    </>
  );
};
