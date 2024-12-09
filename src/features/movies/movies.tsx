import { useContext, useMemo, useState } from 'react';
import styled from '@emotion/styled';

import { Title } from '../../shared/components/title';
import { Button } from '../../shared/components/button';
import { Loader } from '../../shared/components/loader';
import { FilterControls } from './components/filter-controls';
import { MoviesList } from './components/movies-list';
import { SearchBar } from './components/search-input';
import { LayoutSwitch } from './components/layout-switch';

import { sortMovies } from './utils/movie-filters';
import { MovieContext } from './context/movies.context';
import { useMovies } from './hooks/use-movies';
import { ErrorMessage } from '../../shared/components/error-message';

const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  items-align: center;
  width: 100%;
  margin-top: 2rem;
`;

const TotalStats = styled.p`
  width: 100%;
  margin: 0;
`;

export const Movies = () => {
  const { searchTerm } = useContext(MovieContext);
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const {
    data,
    error: queryError,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useMovies(searchTerm, filterType);

  /**
   * Handles the sorting client-side since API doesn't support sorting.
   * Makes sure to memoize to avoid re-sorting on every render.
   */
  const sortedMovies = useMemo(() => {
    const allMovies = data?.pages.flatMap((page) => page.movies) || [];
    return sortMovies(allMovies, sortOrder);
  }, [data, sortOrder]);

  const displayShowMoreButton = sortedMovies.length >= 10 && hasNextPage;
  const totalResults = data?.pages[0]?.totalResults || 0;

  return (
    <>
      <Title>SEARCH MOVIES</Title>
      <SearchBar />
      {sortedMovies.length > 0 && (
        <>
          <FilterControls
            currentSort={sortOrder}
            currentFilter={filterType}
            onFilterChange={(type) => setFilterType(type)}
            onSortChange={(order) => setSortOrder(order)}
          />
          <LayoutSwitch />
          <TotalStats>A total of {totalResults} results</TotalStats>
        </>
      )}

      {isLoading && isFetchingNextPage && <Loader />}
      {queryError ? (
        <ErrorMessage>{queryError.message}</ErrorMessage>
      ) : (
        <MoviesList movies={sortedMovies} />
      )}
      {displayShowMoreButton && (
        <LoadMoreWrapper>
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            Load More
          </Button>
        </LoadMoreWrapper>
      )}
    </>
  );
};
