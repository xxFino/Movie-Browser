import {
  MovieListConteiner,
  MovieInfoBox,
  MovieYear,
  MovieImage,
  MoviesTitle,
  MovieListParagraph,
  MovieRating,
  MovieTagsBox,
  MovieTag,
  MovieListText,
  MovieTile,
  MoviePageName,
  MovieListWrapper,
  MovieTags,
} from "./styled";
import { ReactComponent as Icon } from "../../../core/icon/Vector.svg";
import { genres } from "../../MovieList/Genres/ganres";

export const HomePage = ({ movies }) => {
  return (
    <MovieListConteiner>
      <MoviePageName>Popular movies</MoviePageName>
      <MovieListWrapper>
        {movies.map(
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
                  <MovieYear>{release_date}</MovieYear>
                  <MovieTagsBox>
                    {genre_ids.map((genreId) => (
                      <MovieTags key={genreId}>
                        <MovieTag>
                          {genres.find((genre) => genre.id === genreId)?.name}
                        </MovieTag>
                      </MovieTags>
                    ))}
                  </MovieTagsBox>
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
