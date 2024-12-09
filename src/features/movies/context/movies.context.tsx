import { createContext } from 'react';
import { Layout } from '../types/layout.types';

interface MoviesContextProps {
  searchTerm: string;
  layout: Layout;
  setSearchTerm: (searchTerm: string) => void;
  setLayout: (layout: Layout) => void;
}

const initialState = {
  searchTerm: '',
  layout: Layout.Detailed,
  setSearchTerm: () => {},
  setLayout: () => {},
};

export const MovieContext = createContext<MoviesContextProps>(initialState);
