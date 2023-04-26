import React from "react";
import { useSelector } from "react-redux";
import {
  selectMoviesCast,
  selectMoviesCrew,
} from "./actorSlice";
import { Title } from "../../../core/components/Title";
import { Container } from "../../../core/components/Container";
import { MoviesList } from "../../Movie/MoviesList";

export const ActorInfo = () => {
  const cast = useSelector(selectMoviesCast);
  const crew = useSelector(selectMoviesCrew);

  return (
    <>
      {cast.length > 0 && (
        <Container>
          <Title title={`Movies - cast (${cast.length})`} />
          <MoviesList movies={cast} />
        </Container>
      )}
      {crew.length > 0 && (
        <Container>
          <Title title={`Movies - crew (${crew.length})`} />
          <MoviesList movies={crew} />
        </Container>
      )}
    </>
  );
};
