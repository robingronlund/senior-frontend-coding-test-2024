import { createBrowserRouter } from 'react-router';
import { Movies } from './features/movies/movies';
import { MovieDetails } from './features/movies/movie-details';
import { Home } from './pages/home';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    children: [
      { path: '/', element: <Movies /> },
      { path: 'movies/:id', element: <MovieDetails /> },
    ],
  },
]);
