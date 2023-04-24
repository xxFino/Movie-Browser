import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeopleByQuery,
  selectPeopleStatus,
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

export const People = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const dispatch = useDispatch();
  const peopleStatus = useSelector(selectPeopleStatus);
  const people = useSelector((state) => selectPeopleByQuery(state, query));
  const [page, setPage] = useState(1);
  const totalPages = 500;

  const onPageChange = (page) => {
    setPage(page);
    dispatch(fetchPeople({ page }));
  };

  useEffect(() => {
    dispatch(fetchPeople({ page: page }));
  }, [dispatch, page]);
  return {
    noResult: <NoResult />,
    loading: <Loading />,
    success: (
      <Container>
        <PeopleList status={peopleStatus} people={people} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Container>
    ),
    error: <Error />,
  }[peopleStatus];
};