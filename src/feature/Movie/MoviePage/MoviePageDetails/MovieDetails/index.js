import { Container } from "../../../../../core/components/Container";
import { Rating } from "../../../../../core/components/Rating";
import { posterImage } from "./posterURL";
import {
  Date,
  Description,
  DetailsBox,
  Genre,
  GenreBox,
  Info,
  MovieContainer,
  MovieTitle,
  PosterCover,
  PosterImage,
  Production,
  ProductionBox,
  ReleaseBox,
  Year,
} from "./styled";

export const MovieDetails = ({
  poster_path,
  title,
  release,
  production,
  genres,
  rate,
  votes,
  details,
}) => {
  return (
    <Container>
      <MovieContainer>
        {poster_path ? (
          <PosterImage src={`${posterImage}${poster_path}`} alt={`${title}`} />
        ) : (
          <PosterCover />
        )}
        <DetailsBox>
          <MovieTitle>{title}</MovieTitle>
          {release && <Year>{release.slice(0, 4)}</Year>}
          {production && (
            <ProductionBox>
              <Info>Production:</Info>
              {production.map(({ name }) => name).join(", ")}
              <Production></Production>
            </ProductionBox>
          )}
          {release && (
            <ReleaseBox>
              <Info>Release date:</Info>
              <Date>{release.toString().replaceAll("-", ".")}</Date>
            </ReleaseBox>
          )}
          {genres && (
            <GenreBox>
              {genres.map((genre) => (
                <Genre key={genre.id}>{genre.name}</Genre>
              ))}
            </GenreBox>
          )}
          <Rating rate={rate} votes={votes}/>
          <Description>{details}</Description>
        </DetailsBox>
      </MovieContainer>
    </Container>
  );
};
