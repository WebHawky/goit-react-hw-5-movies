import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default function Searchbar({ handleSubmit }) {
  return (
    <div className={s.wrap}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <label className={s.wrap}>
          <button className={s.btn} type="submit">
            <span className={s.icon}> 🔍</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            name="search"
          />
        </label>
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
};
