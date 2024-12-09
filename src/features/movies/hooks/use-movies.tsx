import { useInfiniteQuery } from '@tanstack/react-query';
import { searchMovies } from '../api/movies.api';

export const useMovies = (debouncedTerm: string, type: string) => {
  return useInfiniteQuery({
    queryKey: ['search-movies', debouncedTerm, type],
    queryFn: ({ pageParam = 1 }) =>
      searchMovies(debouncedTerm, pageParam, type),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const totalPages = Math.ceil(lastPage.totalResults / 10);
      return pages.length < totalPages ? lastPage.nextPage : undefined;
    },
    enabled: debouncedTerm.length >= 3,
  });
};
