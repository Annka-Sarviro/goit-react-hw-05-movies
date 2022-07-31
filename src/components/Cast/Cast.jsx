import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'services/api';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  const getCastImgUrl = ({ profile_path }) => {
    return profile_path
      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
      : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
  };

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchMoviesCredits(movieId) {
      try {
        const data = await getMoviesCredits(movieId);
        setMovieCredits(data.cast);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchMoviesCredits(movieId);
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCredits.map(cast => {
          return (
            <li key={cast.id}>
              <p> {cast.name}</p>
              <img src={getCastImgUrl(cast)} alt={cast.name} width="40" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
