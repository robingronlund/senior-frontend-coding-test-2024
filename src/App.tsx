import { RouterProvider } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MoviesProvider } from './features/movies/context/movies.provider';
import { router } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <RouterProvider router={router}></RouterProvider>
      </MoviesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
