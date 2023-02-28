import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetailes } from '../Api/api';

import MoviesDetailsItem from '../components/MovieDetails/MoviesDetailsItem';
import Loader from 'components/Loader/Loader';
import s from '../components/MovieDetails/MovieDetails.module.css';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetailes(movieId)
      .then(setMovie)
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, [movieId]);

  const location = useLocation();
  const from = location.state?.from ?? '/';

  return (
    <main>
      {loading && <Loader />}
      <MoviesDetailsItem movie={movie} />

      <h2 className={s.additionalTitle}>Additional information</h2>
      <ul className={s.list}>
        <li>
          <Link state={{ from }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}

MoviesDetails.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
      popularity: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
    })
  ),
};
