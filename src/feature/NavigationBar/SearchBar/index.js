import { useHistory, useLocation } from "react-router-dom";
import { Form, SearchInput, StyledSearchIcon } from "./styled";
import searchQueryParamName from "./searchQueryParamName";

export const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();

  const onInputChange = ({ target}) => {
    if (target.value.trim() === "") {
      history.push(`${location.pathname}`);
    } else {
      history.push(
        `${location.pathname}?${searchQueryParamName}=${target.value}&page=1`
      );
    }
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
        value={
          new URLSearchParams(location.search || "").get(
            searchQueryParamName
          ) || ""
        }
        onChange={onInputChange}
      />
    </Form>
  );
};
