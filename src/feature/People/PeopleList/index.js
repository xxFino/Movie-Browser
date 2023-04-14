import Header from "../../../core/components/Header";
import { Photo, Tile, Wrapper } from "./styled";
export const PeopleList = ({ people }) => {
  console.log(people);
  return (
    <>
      <Header>People</Header>
      <Wrapper>
        {people &&
          people.map(({ id, name, imageUrl }) => (
            <Tile key={id}>
              <div>
                <Photo src={imageUrl} alt="Movie Poster" />
                <p>{name}</p>
              </div>
            </Tile>
          ))}
      </Wrapper>
    </>
  );
};
