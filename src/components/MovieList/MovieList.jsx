import React from 'react';
import MovieCard from 'components/MovieCard';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map(movie => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </ul>
  );
};

export default MovieList;
