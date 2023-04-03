import {
  Box,
  Content,
  ContentBox,
  Date,
  Description,
  Images,
  Name,
  Paragraph,
  Rating,
  Tag,
  Text,
  TileMovie,
  Title,
  Wrapper,
} from "./styled";
import { ReactComponent as Icon } from "../../../core/icon/Vector.svg";

export const HomePage = ({ movies }) => {
  return (
    <Content>
      <Title>Popular movies</Title>
      <Wrapper>
        {movies.map(({ id, title, vote_average, imageUrl, vote_count,release_date}) => {
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
              <Description>
              <Tag>tagi</Tag>
              </Description>
              <Rating>
                <Icon/>
                <Text>{vote_average}</Text>
                <Paragraph>{vote_count} votes </Paragraph>
                <p>{}</p>
              </Rating>
              </ContentBox>
            </TileMovie>
          );
        })}
      </Wrapper>
    </Content>
  );
};
