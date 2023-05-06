import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { Wrapper } from "./styled";
import Header from "../../../core/components/Header";
import { MovieTile } from "../MovieTile";
import { NoResult } from "../../Content/NoResult";
import { useSelector } from "react-redux";
import { selectMovieTotalResults } from "../moviesSlice";

export const MoviesList = ({ movies}) => {
  const totalResults= useSelector(selectMovieTotalResults);
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const title = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular Movies";

  return (
    <>
      {totalResults === 0 && <NoResult />}
      {totalResults > 0 && (
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
