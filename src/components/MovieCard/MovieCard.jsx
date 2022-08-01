import { NavLink, useLocation } from 'react-router-dom';
import styles from './MovieCard.module.css';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  return (
    <li key={movie.id} className={styles.item}>
      <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="movie.title"
        />
        {movie.title}
      </NavLink>
    </li>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    profile_path: PropTypes.string,
  }),
};
