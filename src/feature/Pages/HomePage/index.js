import {
  Box,
  Content,
  ContentBox,
  ContentTags,
  Date,
  Description,
  Images,
  Name,
  Paragraph,
  Rating,
  Tag,
  TagBox,
  TagTile,
  Text,
  TileMovie,
  Title,
  Wrapper,
} from "./styled";
import { ReactComponent as Icon } from "../../../core/icon/Vector.svg";
import { genres } from "../ganres";


export const HomePage = ({ movies }) => {
  return (
    <Content>
      <Title>Popular movies</Title>
      <Wrapper>
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
              <TileMovie key={id}>
                <Box>
                  <Images src={imageUrl} alt="Movie Poster" />
                </Box>
                <ContentBox>
                  <Description>
                    <Name>{title}</Name>
                    <Date>{release_date}</Date>
                  </Description>
                </ContentBox>
                <ContentTags>
                  {genre_ids.map((genreId) => (
                    <TagBox key={genreId}>
                      <TagTile>
                        {genres.find((genre) => genre.id === genreId)?.name}
                      </TagTile>
                    </TagBox>
                  ))}
                </ContentTags>

                <Rating>
                  <Icon />
                  <Text>{vote_average}</Text>
                  <Paragraph>{vote_count} votes </Paragraph>
                </Rating>
              </TileMovie>
            );
          }
        )}
      </Wrapper>
    </Content>
  );
};
