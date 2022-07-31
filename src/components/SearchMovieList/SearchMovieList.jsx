import { NavLink } from 'react-router-dom';

const SearchMovieList = ({ searchMovies }) => {
  return (
    <ul>
      {searchMovies.map(searchMovie => {
        return (
          <li key={searchMovie.id}>
            <NavLink to={`/movies/${searchMovie.id}`}>
              {searchMovie.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchMovieList;
