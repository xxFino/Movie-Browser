import {
  MovieListConteiner,
  MovieInfoBox,
  MovieYear,
  MovieImage,
  MoviesTitle,
  MovieListParagraph,
  MovieRating,
  MovieListText,
  MovieTile,
  MoviePageName,
  MovieListWrapper,
} from "./styled";
import { ReactComponent as Icon } from "../../../core/icon/Vector.svg";
import { Genres } from "./Genres";

export const MovieList = ({ movies }) => {
  return (
    <MovieListConteiner>
      <MoviePageName>Popular movies</MoviePageName>
      <MovieListWrapper>
        {movies && movies.map(
          ({
            id,
            title,
            vote_average,
            imageUrl,
            vote_count,
            release_date,
            genre_ids
          }) => {
            return (
              <MovieTile key={id}>
                <MovieImage src={imageUrl} alt="Movie Poster" />
                <MovieInfoBox>
                  <MoviesTitle>{title}</MoviesTitle>
                  <MovieYear>{release_date}</MovieYear>
                  <Genres genre_ids={genre_ids} />
                  <MovieRating>
                    <Icon />
                    <MovieListText>{vote_average}</MovieListText>
                    <MovieListParagraph>{vote_count} votes </MovieListParagraph>
                  </MovieRating>
                </MovieInfoBox>
              </MovieTile>
            );
          }
        )}
      </MovieListWrapper>
    </MovieListConteiner>
  );
};
