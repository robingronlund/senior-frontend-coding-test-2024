import { ReactNode, useMemo, useState } from 'react';
import { MovieContext } from './movies.context';
import { Layout } from '../types/layout.types';

interface MoviesProviderProps {
  children: ReactNode;
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [layout, setLayout] = useState<Layout>(Layout.Detailed);

  const value = useMemo(
    () => ({ searchTerm, setSearchTerm, layout, setLayout }),
    [searchTerm, setSearchTerm, layout, setLayout]
  );

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
