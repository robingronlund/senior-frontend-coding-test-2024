export interface FilterOption {
  label: string;
  value: 'all' | 'movie' | 'series' | 'game';
}

export interface SortOption {
  label: string;
  value: 'asc' | 'desc';
}
