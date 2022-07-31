import { getTranding } from '../services/api';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrandingMovies() {
      try {
        setIsLoading(true);
        const data = await getTranding();
        const movies = data.results;
        setTrandingMovies(movies);

        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log({ error });
      }
    }
    fetchTrandingMovies();
  }, []);

  return (
    <>
      {error && <p>'OOPs'</p>}
      <div className="">
        <h1>Tranding Movies</h1>
        <ul>
          {trandingMovies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      ;
    </>
  );
};
