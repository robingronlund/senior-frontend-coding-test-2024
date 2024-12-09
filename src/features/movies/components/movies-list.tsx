import styled from '@emotion/styled';

import { MoviesListItem } from './movies-list-item';
import { Movie } from '../types/movies.types';

interface MoviesListProps {
  movies: Movie[];
}

const MoviesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;

export const MoviesList = ({ movies }: MoviesListProps) => (
  <MoviesListContainer aria-label='movie-list'>
    {movies.map((movie) => (
      <MoviesListItem key={movie.imdbID} movie={movie} />
    ))}
  </MoviesListContainer>
);
