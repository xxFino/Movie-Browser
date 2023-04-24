import Header from "../../../core/components/Header";
import { Photo, Wrapper } from "./styled";
import Poster from "../../Movie/MoviesList/Poster.svg";
import { toActor } from "../../NavigationBar/route";
import { Tile } from "../../../core/components/Tile";

export const PeopleList = ({ people }) => {
  const profilePath = `https://image.tmdb.org/t/p/original`;
  return (
    <>
      <Header>People</Header>
      <Wrapper>
        {people &&
          people.map((person) => (
           
            <Tile to={toActor(person.id)} key={person.id}>
    
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