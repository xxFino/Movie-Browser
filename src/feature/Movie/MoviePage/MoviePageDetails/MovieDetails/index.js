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
  MovieWrapper,
  PosterCover,
  PosterImage,
  Production,
  InfoBox,
  RatingWrapper,
  Year,
  RatingBox,
  Icon,
  Rate,
  RateOn,
  Votes,
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
    <MovieWrapper>
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
            <InfoBox>
              <Info>Production:</Info>
              <Production>{production.map(({ name }) => name).join(", ")}</Production>
            </InfoBox>
          )}
          {release && (
            <InfoBox>
              <Info>Release date:</Info>
              <Date>{release.toString().replaceAll("-", ".")}</Date>
            </InfoBox>
          )}
          {genres && (
            <GenreBox>
              {genres.map((genre) => (
                <Genre key={genre.id}>{genre.name}</Genre>
              ))}
            </GenreBox>
          )}
          <RatingWrapper><RatingBox>
            <Icon />
            <Rate>{rate.toFixed(1).replace(".", ",")}</Rate>
            <RateOn>/ 10</RateOn>
          </RatingBox>
          <Votes>{votes} votes</Votes></RatingWrapper>
        </DetailsBox>
        <Description>{details}</Description>
      </MovieContainer>
    </MovieWrapper>
  );
};
