import { useQuery } from '@tanstack/react-query';
import { getMovieById } from '../api/movies.api';

export const useMovie = (id?: string) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    enabled: !!id,
  });
};
