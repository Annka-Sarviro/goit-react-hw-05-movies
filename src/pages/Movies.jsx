import { getSearchMovies } from '../services/api';
import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
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
        const data = await getSearchMovies(searchQuery);
        const movies = await data.results;
        setSearchMovies(movies);
      } catch (error) {
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
