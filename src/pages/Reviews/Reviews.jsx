import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/api';
import styles from './Reviews.module.css';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchMoviesReviews(movieId) {
      try {
        const data = await getMoviesReviews(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchMoviesReviews(movieId);
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => {
            return (
              <li key={review.id} className={styles.list}>
                <p className={styles.author}> Author: {review.author}</p>
                <p className={styles.text}>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>Not Reviews</p>
        )}
      </ul>
    </div>
  );
};
