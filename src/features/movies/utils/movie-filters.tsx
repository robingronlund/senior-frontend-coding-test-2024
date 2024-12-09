import { Movie } from '../types/movies.types';

export const sortMovies = (movies: Movie[], sortOrder: string) => {
  return [...movies].sort((a, b) =>
    sortOrder === 'asc'
      ? parseInt(a.Year, 10) - parseInt(b.Year, 10)
      : parseInt(b.Year, 10) - parseInt(a.Year, 10)
  );
};

export const filterMovies = (movies: Movie[], type: string) => {
  if (type === 'all') return movies;

  return movies.filter((movie) => movie.Type === type);
};
