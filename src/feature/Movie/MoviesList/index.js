import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { selectTotalResult } from "../moviesSlice";
import { Wrapper } from "./styled";
import Header from "../../../core/components/Header";
import {MovieTile} from "../MovieTile"
import { NoResult } from "../../Content/NoResult";

export const MoviesList = ({movies}) => {
  const totalResults = useSelector(selectTotalResult);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const title = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular Movies";
  return (
    <>
      <Header>{title}</Header>
      {totalResults === 0 ? (
        <NoResult />
      ) : (
        <Wrapper>
          <MovieTile movies={movies} />
        </Wrapper>
      )}
    </>
  );
};
