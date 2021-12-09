import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true });

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();


  useEffect(() => {
    moviesAPI.fetchMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${makeSlug(`${movie.original_title} ${movie.id}`)}`}
                state={{ from: location, label: 'Go back' }}>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      
    </>
  );
}