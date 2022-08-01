import { getSearchMovies } from '../../services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList';
import styles from './Movies.module.css';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const handleSubmit = query => {
    if (!query) {
      toast.error('Enter search value', {
        duration: 1000,
      });

      return;
    }
    setSearchParams({ searchQuery: query });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function fetchSearchMovies(searchQuery) {
      try {
        const data = await getSearchMovies(searchQuery);
        const movies = await data.results;

        if (movies.length === 0) {
          toast.error('Movies from this serch query not found', {
            duration: 1000,
          });
        }
        setSearchMovies(movies);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchSearchMovies(searchQuery);
  }, [searchQuery]);

  return (
    <div className={styles.movies}>
      <SearchBar onSubmit={handleSubmit} searchQuery={searchQuery} />
      {searchQuery && <MovieList movies={searchMovies} />}
    </div>
  );
};
