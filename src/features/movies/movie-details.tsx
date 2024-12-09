import { Link, useParams } from 'react-router';
import { Title } from '../../shared/components/title';
import { useMovie } from './hooks/use-movie';
import styled from '@emotion/styled';
import { Loader } from '../../shared/components/loader';
import { ErrorMessage } from '../../shared/components/error-message';

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  max-width: 720px;
`;

const MovieDetailsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h2 {
    margin: 0;
  }

  & p {
    font-size: 0.8rem;
    margin: 0;
  }
`;

const MoviePlotContainer = styled.div`
  display: flex;

  gap: 1rem;

  & p {
    font-size: 1rem;
    margin: 0;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Badge = styled.span`
  font-size: 0.8rem;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid hsl(0, 0%, 27.1%);
  border-radius: 2rem;
`;

export const MovieDetails = () => {
  const { id } = useParams();

  const { data: movie, error, isLoading } = useMovie(id);

  return (
    <>
      <Link to='/'>Back to movies</Link>
      {isLoading && <Loader />}
      {error ? (
        <ErrorMessage>{error.message}</ErrorMessage>
      ) : (
        movie && (
          <MovieDetailsContainer>
            <MovieDetailsWrapper>
              <img src={movie.Poster} alt={movie.Title} />
              <TitleWrapper>
                <Title>{movie.Title}</Title>
                <MoviePlotContainer>
                  <p>{movie.Plot}</p>
                </MoviePlotContainer>
              </TitleWrapper>
            </MovieDetailsWrapper>

            <BadgeWrapper>
              {movie.Genre.split(',').map((genre) => (
                <Badge key={genre}>{genre}</Badge>
              ))}
            </BadgeWrapper>

            <div>Director: {movie.Director}</div>
            <div>Actors: {movie.Actors}</div>
          </MovieDetailsContainer>
        )
      )}
    </>
  );
};
