import { createContext } from 'react';

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const initialState = {
  searchTerm: '',
  setSearchTerm: () => {},
};

export const SearchContext = createContext<SearchContextProps>(initialState);
