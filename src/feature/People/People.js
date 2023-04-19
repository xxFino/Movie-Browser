import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPeople, selectPeopleStatus, selectTotalPages } from "./peopleSlice";
import { useEffect } from "react";
import { PeopleList } from "./PeopleList";
import { NoResult } from "../Content/NoResult";
import { Loading } from "../Content/Loading";
import { Container } from "../../core/components/Container";
import { Error } from "../Content/Error";
import { Pagination } from "../../core/components/Pagination";

export const People = () => {
  const dispatch = useDispatch();
  const peopleStatus = useSelector(selectPeopleStatus);
  const people = useSelector(selectPeople);
  const pages = useSelector(selectTotalPages)


  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return {
    noResult: <NoResult />,
    loading: <Loading />,
    success: (
      <Container>
        <PeopleList status={peopleStatus} people={people} />
        <Pagination pages={pages}/>
      </Container>
    ),
    error: <Error />,
  }[peopleStatus];

};
