import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../Api/api';

import CastItem from '../components/Cast/CastItem';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(result => {
        setCast(result.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <>
      <CastItem cast={cast} />
    </>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
