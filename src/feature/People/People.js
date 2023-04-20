import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPeople,
  selectPeopleByQuery,
  selectPeopleStatus,
  selectTotalPages,
} from "./peopleSlice";
import { useEffect } from "react";
import { PeopleList } from "./PeopleList";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../Movie/searchQueryParamName";

export const People = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const dispatch = useDispatch();
  const peopleStatus = useSelector(selectPeopleStatus);
  const people = useSelector((state) => selectPeopleByQuery(state, query));
  const pages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return {
    noResult: <NoResult />,
    loading: <Loading />,
    success: (
      <Container>
        <PeopleList status={peopleStatus} people={people} />
        <Pagination totalPages={pages} />
      </Container>
    ),
    error: <Error />,
  }[peopleStatus];
};
