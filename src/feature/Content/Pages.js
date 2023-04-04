import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies, selectMoviesStatus } from "../Movie/moviesSlice";
import { Content } from "./Content";
import { useEffect } from "react";

export const Pages = () => {
    const dispatch = useDispatch();
    const moviesStatus = useSelector(selectMoviesStatus);
    const movies = useSelector(selectMovies);
  
    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);
  
    return <Content status={moviesStatus} movies={movies} />;
  };