import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=";
const API_KEY = "64dcf25583202648eae7e90e51a0966d";
const GENRE_BASE_URL = "https://api.themoviedb.org/3/genre/movie/list?";


export const fetchData = () =>
  axios.get(`${BASE_URL}${API_KEY}`).then((response) => {
    const movies = response.data.results;

    const moviesWithImages = movies.map((movie) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

      return { ...movie, imageUrl};
    });
    return moviesWithImages;
  });


  export const fetchGenresApi = () =>
    axios.get(`${GENRE_BASE_URL}api_key=${API_KEY}`).then((response) => response.data.genres);