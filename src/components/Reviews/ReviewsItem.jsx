import PropTypes from 'prop-types';
import s from './ReviewsItem.module.css';

export default function ReviewsItem({ reviews }) {
  return (
    <ul className={s.list}>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={s.item}>
            <p className={s.author}>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <h2 className={s.error}>
          Sorry, we dont have any reviews about this movie
        </h2>
      )}
    </ul>
  );
}

ReviewsItem.propTypes = {
  reviews: PropTypes.array,
  id: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};
