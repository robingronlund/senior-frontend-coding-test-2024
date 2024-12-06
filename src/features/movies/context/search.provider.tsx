import { ReactNode, useMemo, useState } from 'react';
import { SearchContext } from './search.context';

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const value = useMemo(() => ({ searchTerm, setSearchTerm }), [searchTerm]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
