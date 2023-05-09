import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectMovieTotalPages,
  selectMovies,
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
import { useFetchMovies } from "./useFetchMovies";

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

  useFetchMovies({ dispatch, query, page, setSearchResults });

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
