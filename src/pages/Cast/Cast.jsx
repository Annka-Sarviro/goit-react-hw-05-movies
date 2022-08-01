import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'services/api';
import CastCard from 'components/CastCard';
import styles from './Cast.module.css';

export const Cast = () => {
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
      <ul className={styles.list}>
        {movieCredits.length > 0 ? (
          movieCredits.slice(0, 20).map(cast => {
            return (
              <CastCard
                cast={cast}
                castImgUrl={getCastImgUrl(cast)}
                key={cast.id}
              />
            );
          })
        ) : (
          <p>Not Casts</p>
        )}
      </ul>
    </div>
  );
};
