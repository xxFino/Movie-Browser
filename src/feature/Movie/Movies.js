import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMoviesStatus } from "./moviesSlice";
import { Content } from "../Content/Content";
import { useEffect } from "react";

export const Movies = () => {
    const dispatch = useDispatch();
    const moviesStatus = useSelector(selectMoviesStatus);
    const movies = useSelector(selectMovies);
  
    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);
  
    return <Content status={moviesStatus} movies={movies} />;
  };