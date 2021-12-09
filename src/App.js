import { lazy, Suspense } from 'react';
import Loader from "react-loader-spinner";
import AppBar from './components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';

const HomeView = lazy(() => import('./views/HomeView/HomeView' /* webpackChunkName: "home-page" */))
const Movies = lazy(() => import('./views/Movies/Movies' /* webpackChunkName: "movies-page" */))
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView' /* webpackChunkName: "not_found-page" */))
const MovieDetailsView = lazy(() => import('./views/MovieDetailView/MovieDetailView' /* webpackChunkName: "movie_detail-page" */))


export default function App() {

  return (
    <div>
      <AppBar />
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
          <Route path="/" element={<HomeView />} />
          <Route path="movies/" element={<Movies />} />
          <Route path="/movies/:slug/*" element={<MovieDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </div>
  )
}