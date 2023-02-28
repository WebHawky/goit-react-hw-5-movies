import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('./views/HomePage'));
const Movies = lazy(() => import('./views/Movies'));
const MoviesDetails = lazy(() => import('./views/MovieDetails'));
const Cast = lazy(() => import('./views/Cast'));
const Reviews = lazy(() => import('./views/Reviews'));
const NotFound = lazy(() => import('./views/NotFound'));

export default function UserRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
