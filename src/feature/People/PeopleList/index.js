import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { PeopleTile } from "../PeopleTile";
import Header from "../../../core/components/Header";
import { Wrapper } from "./styled";
import { NoResult } from "../../Content/NoResult";
import { selectPeopleTotalResults } from "../peopleSlice";
import { useSelector } from "react-redux";

export const PeopleList = ({ people }) => {
  const totalResults = useSelector(selectPeopleTotalResults);

  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const title = query
    ? `Search results for "${query}" (${totalResults})`
    : "Popular People";

  return (
    <>
      {totalResults === 0 && <NoResult />}
      {totalResults > 0 && (
        <>
          <Header>{title}</Header>
          <Wrapper>
            <PeopleTile people={people} />
          </Wrapper>
        </>
      )}
    </>
  );
};
