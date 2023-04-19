import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "64dcf25583202648eae7e90e51a0966d";

export const getMoviesData = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const movies = data.results.map(movie => ({ ...movie, imageUrl: `https://image.tmdb.org/t/p/original${movie.poster_path}` }));
  return { movies, totalPages: data.total_pages, totalResults: data.total_results };
};
export const getGenres = () =>
  axios
    .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => response.data.genres);

export const getPersonData = async (page) => {
  const {data} = await axios.get(`${BASE_URL}/person/popular?api_key=${API_KEY}&page=${page}`);
 const people =  data.results.map(people => ({ ...people, imageUrl: `https://image.tmdb.org/t/p/original${people.profile_path}` }));
  return { people, totalPages: data.total_pages, totalResults: data.total_results };
};
