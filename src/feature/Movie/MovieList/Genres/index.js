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

  return (
    <MovieTagsBox>
      {genres.map((genre) => (
        <MovieTags key={genre.id}>
          <MovieTag>
          {genre.name}
          </MovieTag>
        </MovieTags>
      ))}
    </MovieTagsBox>
  );
};

