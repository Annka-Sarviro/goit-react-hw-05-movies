import { getSearchMovies } from '../services/api';
import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = query => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchSearchMovies(searchQuery) {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(searchQuery);
        const movies = await data.results;
        setSearchMovies(movies);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log({ error });
      }
    }
    fetchSearchMovies(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <SearchMovieList searchMovies={searchMovies} />
    </>
  );
};
