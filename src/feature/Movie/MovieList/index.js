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
import { Container } from "../../../core/components/Container";
import { Pagination } from "../../../core/components/Pagination";
import { TextBold, TextNormal } from "../../../core/components/Text";

export const MoviesList = ({ movies }) => {
  return (
<Container>
  <Header>Popular movies</Header>
        <Wrapper>
          {movies &&
            movies.map(
              ({
                id,
                title,
                vote_average,
                imageUrl,
                vote_count,
                release_date,
                genre_ids,
              }) => {
                return (
                  <MovieTile key={id}>
                    <MovieImage src={imageUrl} alt="Movie Poster" />
                    <MovieInfoBox>
                      <MoviesTitle>{title}</MoviesTitle>
                      <MovieYear>
                        {new Date(release_date).getFullYear()}
                      </MovieYear>
                      <Genres genre_ids={genre_ids} />
                      <MovieRating>
                        <MovieRatingBox>
                        <Icon />
                        <TextBold>{vote_average}</TextBold>
                        <TextNormal>
                          {vote_count} votes
                        </TextNormal>
                        </MovieRatingBox>
                      </MovieRating>
                    </MovieInfoBox>
                  </MovieTile>
                );
              }
            )}
        </Wrapper>
        </Container>
  );
};
