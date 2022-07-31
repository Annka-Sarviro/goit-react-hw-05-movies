const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    onSubmit(query);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="movie"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
