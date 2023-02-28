import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieReviews } from '../Api/api';
import ReviewsItem from '../components/Reviews/ReviewsItem';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(result => {
        setReviews(result.results);
      })
      .catch(error => console.log(error));
  }, [movieId, reviews]);
  return <>{reviews && <ReviewsItem reviews={reviews} />}</>;
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
