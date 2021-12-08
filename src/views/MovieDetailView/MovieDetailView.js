import { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, Link, Route, Routes, useLocation, } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
import Loader from "react-loader-spinner";
import s from './MovieDetailView.module.css';
import { ImArrowLeft } from 'react-icons/im';

const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast' /* webpackChunkName: "cast-page" */))
const Reviews = lazy(() => import('../../components/Reviews/Reviews' /* webpackChunkName: "reviews-page" */))

export default function MovieDetailsView() {
  const location = useLocation();
  const { slug } = useParams();
  const movieId = slug.match(/[a-zA-Z0-9]+$/)[0];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  // const onGoBack = () => {
  //   navigate(
  //   location.state?.from?.pathname
  //     ? `${location.state?.from?.pathname}${location.state?.from?.search}`
  //     : '/',
  // );
  // }

  return (
    <>
      {movie && (
        <>
          {/* <button type="button" onClick={onGoBack}>Go back</button> */}
          <Link to={location.state?.from?.pathname
         ? `${location.state?.from?.pathname}${location.state?.from?.search}`
            : '/'}>
            <ImArrowLeft style={{ marginRight: 8, marginBottom: -2 }} />
            Go back</Link>
          <div className={s.container}>
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.original_title} />
            <div className={s.description}>
              <h2>{movie.original_title}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </div>
          <div className={s.additionalInfo}>
            <hr/>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link
                  to={`/movies/${slug}/cast`}
                  state={{ from: location.state.from, label: 'Go back' }}
                >
            Cast
          </Link>

              </li>
              <li>
                <Link
                  to={`/movies/${slug}/reviews`}
                  state={{ from: location.state.from, label: 'Go back' }}
                >
            Reviews
            </Link>
              </li>
            </ul>
          
            <hr/>
            </div>
          <Suspense fallback={
            <Loader
              className={s.loader}
              type="TailSpin"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />}>
          <Routes>
            <Route path="/cast" element={<MovieCast />} />
            <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}