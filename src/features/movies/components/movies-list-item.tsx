import styled from '@emotion/styled';
import { Movie } from '../types/movies.types';
import { Layout } from '../types/layout.types';
import { useNavigate } from 'react-router';
import { MovieContext } from '../context/movies.context';
import { useContext } from 'react';

export const MovieImage = styled.img<{ layout: Layout }>`
  width: ${({ layout }) => (layout === Layout.Detailed ? '80px' : '40px')};
  object-fit: cover;
`;

const MovieContentWrapper = styled.div<{ layout: Layout }>`
  display: flex;
  flex-direction: ${({ layout }) =>
    layout === Layout.Detailed ? 'column' : 'row'};
  gap: 0.5rem;

  & p {
    margin: 0;
  }
`;

const MoviesListItemWrapper = styled.div<{ layout: Layout }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  gap: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

interface MoviesListItemProps {
  movie: Pick<Movie, 'Title' | 'Year' | 'imdbID' | 'Type' | 'Poster'>;
}

export const MoviesListItem = ({ movie }: MoviesListItemProps) => {
  const { layout } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <MoviesListItemWrapper
      aria-label='movie-list-item'
      layout={layout}
      onClick={() => navigate(`/movies/${movie.imdbID}`)}
    >
      <MovieImage layout={layout} src={movie.Poster} alt={movie.Title} />

      <MovieContentWrapper layout={layout}>
        <p>
          <b>Title:</b> {movie.Title}
        </p>
        {layout === Layout.Detailed && (
          <>
            <p>
              <b>Release year:</b> {movie.Year}
            </p>
            <p>
              <b>Type:</b> {movie.Type}
            </p>
          </>
        )}
      </MovieContentWrapper>
    </MoviesListItemWrapper>
  );
};
