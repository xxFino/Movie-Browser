import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesApi } from "../fetchMovies";
import { Content, TileMovie, Wrapper } from "./styled";

export const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMoviesApi());
  }, [dispatch]);

  return (
    <Content>
      <h2>Popular movies</h2>
    <Wrapper>
      {movies.map(({ id,original_title,overview }) => {
        return(
          <TileMovie key={id}>
          <li>{original_title}</li>
          <div>
            <li>{overview}</li>
          </div>
        </TileMovie>
        );
       
      })}
    </Wrapper>
    </Content>
  );
};