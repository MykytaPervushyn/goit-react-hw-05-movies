const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '52d240069c1d754f89fa7da7b1692ef8';


export function fetchMovies() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Not found'));
    });
}

export function fetchMovieById(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Not found'));
  });
}

export function fetchCast(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('There are no data for this movie'));
  });
}

export function fetchReview(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('There are no reviews for this movie'));
  });
}

export function fetchQuery(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No movies with ${query} name`));
  });
}