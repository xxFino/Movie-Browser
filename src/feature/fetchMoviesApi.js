import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=";
const API_KEY = "64dcf25583202648eae7e90e51a0966d";

export const fetchMoviesApi = () =>
  axios.get(`${BASE_URL}${API_KEY}`).then((response) => {
    const movies = response.data.results;

    const moviesWithImages = movies.map((movie) => {
      const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

      return { ...movie, imageUrl};
    });
    return moviesWithImages;
  });
  //export const fetchMovieID = (movieId) =>
  //axios
    //.get(
    //  `${BASE_URL}${movieId}?api_key=${API_KEY}`
   // )
   // .then((response) => response.data);

