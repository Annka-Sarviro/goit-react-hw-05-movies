import { getTranding } from '../services/api';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
