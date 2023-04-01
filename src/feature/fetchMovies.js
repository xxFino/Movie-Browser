import axios from "axios";
import {
  fetchMoviesError,
  fetchMoviesLoading,
  fetchMoviesSuccess,
} from "./moviesSlice";

export const fetchMoviesApi = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesLoading());
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=64dcf25583202648eae7e90e51a0966d"
    );
    dispatch(fetchMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }
};
