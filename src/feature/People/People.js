import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople, selectPeopleStatus } from "./peopleSlice";
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
  const totalPages = 500;
  const [searchResults, setSearchResults] = useState([]);

 useEffect(() => {
    query
      ? getQueryData("person", query).then(setSearchResults)
      : dispatch(fetchPeople({ page: 1 }));
  }, [dispatch, query]);

  const onPageChange = (page) => (
    setPage(page), dispatch(fetchPeople({ page }))
  );

  return {
    loading: <Loading />,
    error: <Error />,
    noResult: <NoResult />,
    success: (
      <Container>
        <PeopleList
          status={peopleStatus}
          people={query ? searchResults : people}
        />
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Container>
    ),
  }[peopleStatus];
};
