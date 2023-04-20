import { useHistory, useLocation } from "react-router-dom";
import { Form, SearchInput, StyledSearchIcon } from "./styled";
import searchQueryParamName from "./searchQueryParamName";

export const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Form>
      <StyledSearchIcon />
      <SearchInput
         placeholder={
            location.pathname.includes("people")
              ? "Search for people..."
              : "Search for movies..."
          }
          value={query || ""}
          onChange={onInputChange}/>
    </Form>
  );
};
