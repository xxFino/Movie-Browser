import { useHistory, useLocation } from "react-router-dom";
import { Form, SearchInput, StyledSearchIcon } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const SearchBar = () => {
  const location = useLocation();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [currentPage, setCurrentPage] = useState(
    location.pathname.includes("people") ? "people" : "movie"
  );

  useEffect(() => {
    if (debouncedSearchValue.trim() === "") {
      history.push(`${location.pathname}`);
    } else {
      history.push(
        `${location.pathname}?${searchQueryParamName}=${debouncedSearchValue}`
      );
    }
  }, [debouncedSearchValue, history, location.pathname]);

  useEffect(() => {
    setSearchValue("");
    setCurrentPage(location.pathname.includes("people") ? "people" : "movie");
  }, [location.pathname]);

  const onInputChange = ({ target }) => {
    setSearchValue(target.value);
  };
  return (
    <Form>
      <StyledSearchIcon />
      <SearchInput
        placeholder={
          currentPage === "people"
            ? "Search for people..."
            : "Search for movies..."
        }
        value={searchValue}
        onChange={onInputChange}
      />
    </Form>
  );
};
