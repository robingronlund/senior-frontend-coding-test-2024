import styled from '@emotion/styled';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/movies.context';
import { useDebounce } from '@uidotdev/usehooks';

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: #ff6847eb;
  margin-top: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  min-width: 300px;
`;

export const SearchBar = () => {
  const { setSearchTerm } = useContext(MovieContext);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayError, setDisplayError] = useState<boolean>(false);
  const debouncedTerm = useDebounce(searchQuery, 600);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchQuery(value);
  };

  useEffect(() => {
    if (debouncedTerm.length >= 3) {
      setSearchTerm(debouncedTerm);
    }
  }, [debouncedTerm, setSearchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      debouncedTerm.length < 3 ? setDisplayError(true) : setDisplayError(false);
    }
  }, [debouncedTerm]);

  return (
    <SearchInputWrapper>
      <SearchInput
        type='search'
        name='search'
        id='search'
        tabIndex={0}
        minLength={3}
        placeholder='Search movies & series'
        onChange={handleChange}
      />
      {displayError && (
        <ErrorMessage>Please enter at least 3 characters.</ErrorMessage>
      )}
    </SearchInputWrapper>
  );
};
