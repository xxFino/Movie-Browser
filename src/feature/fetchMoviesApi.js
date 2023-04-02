import axios from "axios";

export const fetchMoviesApi = () =>
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=64dcf25583202648eae7e90e51a0966d"
    )
    .then((response) => response.data.results);
