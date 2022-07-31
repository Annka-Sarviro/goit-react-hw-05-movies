import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetaile } from '../services/api';
import DetailsBar from 'components/DetailsBar';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // const getGenres = ({ genres }) => {
  //   const gen = genres.map(genre => genre.name);
  //   return gen.join(' ');
  // };

  const getImgUrl = ({ poster_path }) => {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  };

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchMovieDetails(movieId) {
      try {
        setIsLoading(true);
        const data = await getMoviesDetaile(movieId);
        console.log(data);
        setMovieDetails(data);

        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log({ error });
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <div className="">
      <h1>{movieDetails.title}</h1>
      <p>Use Score {movieDetails.title}</p>
      <img src={getImgUrl(movieDetails)} alt={movieDetails.title} width="250" />
      <p>Overview {movieDetails.overview}</p>
      {/* <p>Genres {getGenres(movieDetails)}</p> */}
      <DetailsBar />
      <Outlet />
    </div>
  );
};
