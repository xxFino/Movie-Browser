import { Error } from "./Error";
import { MovieList } from "../Movie/MovieList";
import { Loading } from "./Loading";

export const Content = ({ status, movies }) => {
    switch (status) {
      case "initial":
        return null;
      case "loading":
        return <Loading />;
      case "error":
        return <Error />;
      case "success":
        return <MovieList movies={movies} />;
  
      default:
        throw new Error(`incorrect status: ${status}`);
    }
  };
  