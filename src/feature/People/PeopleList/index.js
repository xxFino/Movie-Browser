import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";
import { PeopleTile } from "../PeopleTile";
import Header from "../../../core/components/Header";
import { Wrapper } from "./styled";
import { NoResult } from "../../Content/NoResult";

export const PeopleList = ({ people }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const title = query
    ? `Search results for "${query}" (${people.length})`
    : "Popular People";

  return (
    <>
      {people.length === 0 && <NoResult />}
      {people.length > 0 && (
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
