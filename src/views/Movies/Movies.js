import { useState, useEffect, } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import slugify from 'slugify';
import s from '../Movies/Movies.module.css';

const makeSlug = string => slugify(string, { lower: true });

export default function Movies() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [query, setQuery] = useState('');
  const q = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (q != null) {
      moviesAPI.fetchQuery(q).then((movie) => {
        setSearchedMovies(movie.results);
      })
    }
    if (q === null) return;
  }, [q]);

  const handleQueryChange = e => {
    e.preventDefault();
    setQuery(e.currentTarget.value.toLowerCase())
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Please enter search query');
      return;
    }

    if (!query.trim()) return setQuery('');

    moviesAPI.fetchQuery(query).then((movie) => {
      setSearchedMovies(movie.results);
    });
    navigate({
      ...location,
      search: `q=${query}`
    });
    reset();
  };
  const reset = () => {
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={handleQueryChange}
        />
        <button type="submit">
          <span className={s.button}>Search</span>
        </button>
      </form>

      <ul>
        {searchedMovies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${makeSlug(`${movie.original_title} ${movie.id}`)}`}
              state={{ from: location, label: 'Go back' }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}