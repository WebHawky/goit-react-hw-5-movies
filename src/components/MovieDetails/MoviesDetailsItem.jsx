import PropTypes from 'prop-types';
import Btn from 'components/Btn/Btn';

import s from './MovieDetails.module.css';

const notFound = `https://www.peakpx.com/en/hd-wallpaper-desktop-arzfv`;

const src = url =>
  url ? `https://image.tmdb.org/t/p/original${url}` : notFound;

export default function MoviesDetailsItem({ movie }) {
  if (movie === null) {
    return notFound;
  }
  const { poster_path, original_title, popularity, overview, genres } = movie;

  const poster = src(poster_path);
  const genresList = genres.map(({ name }) => name).join(', ');
  //

  return (
    movie && (
      <div className={s.wrap}>
        <img src={poster} alt={original_title} width={'500px'} />

        <div className={s.desc}>
          <h2 className={s.title}>{original_title}</h2>
          <h3 className={s.scores}>Users Scores: {popularity}%</h3>
          <h3 className={s.overview}>Overview</h3>
          <p className={s.overview}>{overview}</p>
          <h3 className={s.genres}>Genres</h3>
          <p className={s.genre}>{genresList}</p>
          <Btn text="Go back" />
        </div>
      </div>
    )
  );
}

MoviesDetailsItem.propTypes = {
  movie: PropTypes.object,
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
};
