import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { Wrapper } from "./styled";
import Header from "../../../core/components/Header";
import { MovieTile } from "../MovieTile";
import { NoResult } from "../../Content/NoResult";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const title = query
    ? `Search results for "${query}" (${movies.length})`
    : "Popular Movies";

  return (
    <>
      {movies.length === 0 && <NoResult />}
      {movies.length > 0 && (
        <>
          <Header>{title}</Header>
          <Wrapper>
            <MovieTile movies={movies} />
          </Wrapper>
        </>
      )}
    </>
  );
};
