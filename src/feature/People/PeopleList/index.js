import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { PeopleTile } from "../PeopleTile";
import Header from "../../../core/components/Header";
import { selectTotalResults } from "../peopleSlice";

export const PeopleList = ({ people }) => {
  const totalResult = useSelector(selectTotalResults);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const title = query
    ? `Search results for "${query}" (${totalResult})`
    : "Popular People";

  return (
    <>
      <Header>{title}</Header>
      <Wrapper>
        <PeopleTile people={people} />
      </Wrapper>
    </>
  );
};
