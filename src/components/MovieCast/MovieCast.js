import { useState, useEffect } from 'react';
import * as moviesAPI from '../../services/movies-api';
import { useParams } from "react-router-dom";

export default function AuthorsView() {
  const [movieCast, setMovieCast] = useState([]);
  const { slug } = useParams();
  const movieId = slug.match(/[a-zA-Z0-9]+$/)[0];

  useEffect(() => {
    moviesAPI.fetchCast(movieId).then((movieCast) => {
      setMovieCast(movieCast.cast);
    });
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <ul>
          {movieCast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.character}
              ></img>
              <p>{`${actor.name}`}</p>
              <p>{`Character: ${actor.character}`}</p>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
}