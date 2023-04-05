import {
  MovieListContainer,
  MovieInfoBox,
  MovieYear,
  MovieImage,
  MoviesTitle,
  MovieListParagraph,
  MovieRating,
  MovieListText,
  MovieTile,
  MovieListWrapper,
} from "./styled";
import { ReactComponent as Icon } from "../../../core/icon/Vector.svg";
import { Genres } from "./Genres";
import Header from "../../../core/components/Header";

export const MovieList = ({ movies }) => {
  return (
    <>
    <MovieListContainer>
    <Header>Popular movies</Header>
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
                  <MovieYear>{new Date(release_date).getFullYear()}</MovieYear>
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
    </MovieListContainer>
    </>
  );
};