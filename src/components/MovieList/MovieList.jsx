import React from 'react';
import MovieCard from 'components/MovieCard';
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.array,
};
