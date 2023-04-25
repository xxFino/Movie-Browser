import Header from "../../../core/components/Header";
import { Photo, Wrapper } from "./styled";
import Poster from "../../Movie/MoviesList/Poster.svg";
import { toActor } from "../../NavigationBar/route";
import { Tile } from "../../Movie/MovieTile/styled";
import { useSelector } from "react-redux";
import { selectTotalResult } from "../peopleSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../NavigationBar/SearchBar/searchQueryParamName";

export const PeopleList = ({ people }) => {
  const totalResult = useSelector(selectTotalResult);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const title = query
    ? `Search results for "${query}" (${totalResult})`
    : "Popular People";
  const profilePath = `https://image.tmdb.org/t/p/original`;
  return (
    <>
      <Header>{title}</Header>
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
