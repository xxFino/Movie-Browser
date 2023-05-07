import { useSelector } from "react-redux";
import {
  selectMoviePageCredits,
  selectMoviePageDetails,
} from "../moviePageSlice";
import { Backdrop } from "./Backdrop";

export const MoviePageDetails = () => {
  const movieDetails = useSelector(selectMoviePageDetails);
  const movieCredits = useSelector(selectMoviePageCredits);
  const movieCast = movieCredits.cast;
  const movieCrew = movieCredits.crew;
  console.log(movieCast);
  console.log(movieCrew);

  return (
    <>
      {movieDetails.backdrop_path && (
        <Backdrop
          backdrop_path={movieDetails.backdrop_path}
          title={movieDetails.title}
          rate={movieDetails.vote_average}
          votes={movieDetails.vote_count}
        />
      )}
    </>
  );
};
