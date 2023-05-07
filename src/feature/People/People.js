import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  fetchPeopleSuccess,
  selectPeople,
  selectPeopleStatus,
  selectPeopleTotalPages,
  selectPeopleTotalResults,
} from "./peopleSlice";
import { useEffect } from "react";
import { PeopleList } from "./PeopleList";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../NavigationBar/SearchBar/searchQueryParamName";
import { useState } from "react";
import { getQueryData } from "../../core/getData";

export const People = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search || "").get(
    searchQueryParamName
  );
  const dispatch = useDispatch();
  const peopleStatus = useSelector(selectPeopleStatus);
  const people = useSelector(selectPeople);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectPeopleTotalPages);
  const [searchResults, setSearchResults] = useState([]);
  const totalResults = useSelector(selectPeopleTotalResults);

  useEffect(() => {
    if (query) {
      getQueryData("person", query, page).then((response) => {
        setSearchResults(response.results);
        dispatch(
          fetchPeopleSuccess({
            people: response.results,
            totalPages: response.total_pages,
            totalResults: response.total_results,
          })
        );
      });
    } else {
      dispatch(fetchPeople({ page }));
    }
  }, [dispatch, query, page]);

  const onPageChange = (page, query) => {
    setPage(page);
    dispatch(fetchPeople({ page, query }));
  };
  return (
    <>
      {peopleStatus === "loading" ? (
        <Loading />
      ) : peopleStatus === "error" ? (
        <Error />
      ) : query && searchResults.length === 0 ? (
        <NoResult />
      ) : (
        <Container>
          <PeopleList people={query ? searchResults : people} />
          <Pagination
            page={page}
            totalPages={totalPages > 500 ? 500 : totalPages}
            onPageChange={onPageChange}
          />
        </Container>
      )}
    </>
  );
};