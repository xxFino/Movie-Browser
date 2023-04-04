import { useEffect, useState } from "react";
import { MovieTag, MovieTags, MovieTagsBox } from "../styled";
import { fetchGenresApi } from "../../../../core/fetchData";

export const Genres = ({ genre_ids }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenresApi().then((genres) => {
      setGenres(genres);
    });
  }, []);
  
  const filteredGenres = genres.filter((genre) => genre_ids.includes(genre.id));

  return (
    <MovieTagsBox>
      {filteredGenres.map((genre) => (
        <MovieTags key={genre.id}>
          <MovieTag>{genre.name}</MovieTag>
        </MovieTags>
      ))}
    </MovieTagsBox>
  );
};
