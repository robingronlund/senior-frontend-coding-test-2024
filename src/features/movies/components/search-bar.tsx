import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

const ErrorMessage = styled.p`
  color: #ff6847eb;
  margin-top: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  min-width: 300px;
`;

interface SearchBarProps {
  error?: boolean;
  onSearch: (search: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ error, onSearch }: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e);
  };

  return (
    <div>
      <SearchInput
        type='search'
        name='search'
        id='search'
        minLength={3}
        placeholder='Search movies & series'
        onChange={handleChange}
      />
      {error && <ErrorMessage>Please enter at least 3 words.</ErrorMessage>}
    </div>
  );
};
