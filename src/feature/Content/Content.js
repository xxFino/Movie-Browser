import { Error } from "./Error";
import { MoviesList } from "../Movie/MovieList";
import { Loading } from "./Loading";

export const Content = ({ status, movies }) => {
    switch (status) {
      case "initial":
        return null;
      case "loading":
        return <p>ładowanaie</p>; ///Loading
      case "error":
        return <Error />;
      case "success":
        return <MoviesList movies={movies} />;
  
      default:
        throw new Error(`incorrect status: ${status}`);
    }
  };
  