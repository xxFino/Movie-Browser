import Poster from "./poster.png";
import { toActor } from "../../NavigationBar/route";
import { Tile, Image, Title } from "./styled";

export const PeopleTile = ({ people }) => {
  const profilePath = `https://image.tmdb.org/t/p/original`;

  return (
    <>
      {people &&
        people.map((person) => (
          <Tile to={toActor(person.id)} key={person.id}>
            {person.profile_path ? (
              <Image
                src={
                  person.profile_path && `${profilePath}${person.profile_path}`
                }
                alt=""
              />
            ) : (
              <Image src={Poster} alt="poster" />
            )}
            <Title>{person.name}</Title>
          </Tile>
        ))}
    </>
  );
};
