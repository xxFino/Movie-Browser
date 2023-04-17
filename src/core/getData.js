import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "64dcf25583202648eae7e90e51a0966d";

export const getMoviesData = async (currentPage) => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`
  );
  const movies = response.data.results.map((movie) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    return { ...movie, imageUrl };
  });
  const totalPages = response.data.total_pages;
  const totalResults = response.data.total_results;
  return { movies, totalPages, totalResults };
};
export const getGenres = () =>
  axios
    .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => response.data.genres);

export const getPersonData = async (currentPage) => {
  const response = await axios.get(
    `${BASE_URL}/person/popular?api_key=${API_KEY}&page=${currentPage}`
  );
  const people = response.data.results.map((people) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${people.profile_path}`;

    return { ...people, imageUrl };
  });
  const totalPages = response.data.total_pages;
  const totalResults = response.data.total_results;
  return { people, totalPages, totalResults };
};
