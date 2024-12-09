import styled from '@emotion/styled';
import { SelectInput } from './select-input';
import { FilterOption, SortOption } from '../types/select.types';

interface FilterControlsProps {
  currentSort: string;
  currentFilter: string;
  onSortChange: (value: string) => void;
  onFilterChange: (value: string) => void;
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const FilterControls = ({
  currentSort,
  currentFilter,
  onSortChange,
  onFilterChange,
}: FilterControlsProps) => {
  const filterOptions: FilterOption[] = [
    { label: 'All', value: 'all' },
    { label: 'Movie', value: 'movie' },
    { label: 'Series', value: 'series' },
    { label: 'Game', value: 'game' },
  ];

  const sortOptions: SortOption[] = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  return (
    <FilterContainer>
      <SelectInput
        label='Sort by Release Year:'
        value={currentSort}
        options={sortOptions}
        onChange={(val) => onSortChange(val)}
      />
      <SelectInput
        label='Filter by Type:'
        value={currentFilter}
        options={filterOptions}
        onChange={(val) => onFilterChange(val)}
      />
    </FilterContainer>
  );
};
