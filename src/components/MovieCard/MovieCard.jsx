import { NavLink, useLocation } from 'react-router-dom';
import styles from './MovieCard.module.css';

const TrandingCard = ({ movie }) => {
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

export default TrandingCard;
