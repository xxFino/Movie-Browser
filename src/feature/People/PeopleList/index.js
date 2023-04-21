import Header from "../../../core/components/Header";
import { Photo, Tile, Wrapper } from "./styled";
import Poster from "../../Movie/MoviesList/Poster.svg";

export const PeopleList = ({ people }) => {
  const profilePath = `https://image.tmdb.org/t/p/original`;
  return (
    <>
      <Header>People</Header>
      <Wrapper>
        {people &&
          people.map((person) => (
            <Tile key={person.id}>
              {person.profile_path ? (
                <Photo
                  src={
                    person.profile_path &&
                    `${profilePath}${person.profile_path}`
                  }
                  alt=""
                />
              ) : (
                <Photo src={Poster} alt="poster" />
              )}
              <p>{person.name}</p>
            </Tile>
          ))}
      </Wrapper>
    </>
  );
};
