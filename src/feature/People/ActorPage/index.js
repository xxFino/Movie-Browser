import { useSelector } from "react-redux";
import { selectMoviesCast, selectMoviesCrew } from "./ActorSlice";
import { Title } from "../../../core/components/Title";
import { Container } from "../../../core/components/Container";
import { MovieTile } from "../../Movie/MovieTile";
import { Wrapper } from "../../Movie/MoviesList/styled";


export const ActorInfo = () => {
 
  const cast = useSelector(selectMoviesCast);
  const crew = useSelector(selectMoviesCrew);

  return (
    <>
      {cast.length > 0 && (
        <Container>
          <Title title={`Movies - cast (${cast.length})`} />
          <Wrapper>
            <MovieTile movies={cast} />
          </Wrapper>
        </Container>
      )}
      {crew.length > 0 && (
        <Container>
          <Title title={`Movies - crew (${crew.length})`} />
          <Wrapper>
            <MovieTile movies={crew} />
          </Wrapper>
        </Container>
      )}
    </>
  );
};
