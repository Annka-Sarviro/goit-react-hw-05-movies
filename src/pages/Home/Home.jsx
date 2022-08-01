import { getTranding } from '../../services/api';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import MoviesList from 'components/MovieList';

export const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrandingMovies() {
      try {
        const data = await getTranding();
        const movies = data.results;
        setTrandingMovies(movies);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchTrandingMovies();
  }, []);

  return (
    <>
      <div className={styles.tranding_movies}>
        <h1 className={styles.title}>Tranding Movies</h1>
        <MoviesList movies={trandingMovies} />
      </div>
      ;
    </>
  );
};
