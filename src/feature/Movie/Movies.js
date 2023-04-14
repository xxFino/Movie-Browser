import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMoviesStatus } from "./moviesSlice";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { MoviesList } from "./MoviesList";
import { Pagination } from "../../core/components/Pagination";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { useEffect } from "react";

export const Movies = () => {
  const dispatch = useDispatch();
  const moviesStatus = useSelector(selectMoviesStatus);
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return {
    noResult: <NoResult />,
    loading: <Loading />,
    success: (
      <Container>
        <MoviesList status={moviesStatus} movies={movies} />

      </Container>
    ),
    error: <Error />,
  }[moviesStatus];
};
