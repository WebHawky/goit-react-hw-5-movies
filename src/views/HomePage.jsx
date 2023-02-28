import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../Api/api';

import ListItem from '../components/List/ListItem';
import Loader from '../components/Loader/Loader';

export default function List() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPopularMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
      .finally(setLoading(false));
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <h2 style={{ textAlign: 'center', margin: '15px' }}>Trending Movies</h2>
      {<ListItem movies={movies} />}
    </main>
  );
}

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
