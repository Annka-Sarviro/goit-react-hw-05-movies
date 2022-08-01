import styles from './SearchBar.module.css';

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
