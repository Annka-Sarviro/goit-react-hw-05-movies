import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit, searchQuery }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    onSubmit(query);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input
            type="text"
            name="movie"
            autoComplete="off"
            autoFocus
            placeholder={searchQuery ? searchQuery : 'Search movie'}
          ></input>
        </label>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  searchQuery: PropTypes.string,
};
