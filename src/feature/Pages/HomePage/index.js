import { Content, TileMovie, Wrapper } from "./styled";

export const HomePage = ({movies}) => {

  return (
    <Content>
      <h2>Popular movies</h2>
    <Wrapper>
      {movies.map(({ id,original_title,overview }) => {
        return(
          <TileMovie key={id}>
          <li>{original_title}</li>
          <div>
            <li>{overview}</li>
          </div>
        </TileMovie>
        );
       
      })}
    </Wrapper>
    </Content>
  );
};