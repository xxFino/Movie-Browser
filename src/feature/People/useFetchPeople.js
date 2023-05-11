import { useEffect } from "react";
import { getQueryData } from "../../core/getData";
import { fetchPeople, fetchPeopleSuccess } from "./peopleSlice";

export const useFetchPeople = ({ dispatch, query, page, setSearchResults }) => {
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
  }, [dispatch, query, page, setSearchResults]);
};
