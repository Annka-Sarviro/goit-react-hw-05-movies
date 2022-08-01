import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMoviesDetaile } from '../../services/api';
import DetailsBar from 'components/DetailsBar';
import { Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const linkBack = location?.state?.from;

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchMovieDetails(movieId) {
      try {
        const data = await getMoviesDetaile(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <Link to={location?.state?.from ?? '/'} className={styles.backBtn}>
        Go Home
      </Link>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {movieDetails.title}
          <span>
            {' '}
            (
            {movieDetails.release_date && movieDetails.release_date.slice(0, 4)}
            ){' '}
          </span>
        </h1>

        <p className={styles.title}>Use Score: {movieDetails.vote_average}</p>
        {movieDetails.poster_path && (
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width="250"
          />
        )}

        <p className={styles.text}>Overview {movieDetails.overview}</p>
        <div className={styles.genres}>
          <p className={styles.genres_title}>Genres: </p>
          {movieDetails.genres && (
            <p>{movieDetails.genres.map(({ name }) => name).join(', ')}</p>
          )}
        </div>

        <DetailsBar linkBack={linkBack} />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
