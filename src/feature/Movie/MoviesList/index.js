import {
  MovieInfoBox,
  MovieYear,
  MovieImage,
  MoviesTitle,
  MovieRating,
  MovieTile,
  Wrapper,
  MovieRatingBox,
} from "./styled";
import { ReactComponent as Icon } from "../../../core/icon/Vector.svg";
import { Genres } from "./Genres";
import Header from "../../../core/components/Header";
import { TextBold, TextNormal } from "../../../core/components/Text";
import Poster from "./Poster.svg"

export const MoviesList = ({movies}) => {
  const posterPath = `https://image.tmdb.org/t/p/w500`;
return(
  <>
<Header>Popular movies</Header>
        <Wrapper>
          {movies &&
            movies.map(
              (movie) => {
                return (
                  <MovieTile key={movie.id}>
                      {
                movie.poster_path ?
                  (
                    <MovieImage src={movie.poster_path && `${posterPath}${movie.poster_path}`} alt="" />
                  ) : (
                    <MovieImage src={Poster} alt="poster" />
                  )
              }
                    <MovieInfoBox>
                      <MoviesTitle>{movie.title}</MoviesTitle>
                      <MovieYear>
                        {new Date(movie.release_date).getFullYear()}
                      </MovieYear>
                      <Genres genre_ids={movie.genre_ids} />
                      <MovieRating>
                        <MovieRatingBox>
                        <Icon />
                        <TextBold>{movie.vote_average}</TextBold>
                        <TextNormal>
                          {movie.vote_count} votes
                        </TextNormal>
                        </MovieRatingBox>
                      </MovieRating>
                    </MovieInfoBox>
                  </MovieTile>
                );
              }
            )}
        </Wrapper>
        </>
)
};
