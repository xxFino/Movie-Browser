import { Error } from "./Error";
import { HomePage } from "../Pages/HomePage";
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
        return <HomePage movies={movies} />;
  
      default:
        throw new Error(`incorrect status: ${status}`);
    }
  };
  