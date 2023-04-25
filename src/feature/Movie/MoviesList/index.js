import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { selectTotalResults } from "../moviesSlice";
import { Wrapper } from "./styled";
import Header from "../../../core/components/Header";
import { MovieTile } from "../MovieTile";

export const MoviesList = ({ movies }) => {
  const totalResults = useSelector(selectTotalResults);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const title = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular Movies";
  return (
    <>
      <Header>{title}</Header>
      <Wrapper>
        <MovieTile movies={movies} />;
      </Wrapper>
    </>
  );
};
