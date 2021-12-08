import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { slug } = useParams();
  const movieId = slug.match(/[a-zA-Z0-9]+$/)[0];


  useEffect(() => {
      moviesAPI.fetchReview(movieId).then((data) => {
          setReviews(data.results)
      });
  }, [movieId]);

    if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}