import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/api';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchMoviesReviews(movieId) {
      try {
        setIsLoading(true);
        const data = await getMoviesReviews(movieId);
        console.log(data);
        setMovieReviews(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
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
              <li key={review.id}>
                <p> Author: {review.author}</p>
                <p>{review.content}</p>
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

export default Reviews;
