import axios from 'axios';
import { Movie } from '../types/movies.types';

const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export interface ApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

interface Params {
  apikey: string;
  s?: string;
  page?: number;
  type?: string;
  i?: string;
  t?: string;
}

export const searchMovies = async (
  searchTerm: string,
  pageParam: number,
  type: string
) => {
  const params: Params = {
    apikey: apiKey,
    s: searchTerm,
    page: pageParam,
  };

  if (type !== 'all') {
    params.type = type;
  }

  const { data } = await axios.get<ApiResponse>(`${baseUrl}`, { params });

  if (data.Response === 'False') {
    console.log(data.Error);
    throw new Error(data.Error);
  }

  return {
    movies: data.Search.filter((movie) => movie.Poster !== 'N/A'), // Filter out movies without a poster,
    totalResults: parseInt(data.totalResults, 10),
    nextPage: pageParam + 1,
  };
};

export const getMovieById = async (id: string) => {
  const params: Params = {
    apikey: apiKey,
    i: id,
  };
  const { data } = await axios.get<Movie>(`${baseUrl}`, { params });

  return data;
};

export const getMovieByTitle = async (title: string) => {
  const params: Params = {
    apikey: apiKey,
    t: title,
  };
  const { data } = await axios.get<Movie>(`${baseUrl}`, { params });

  return data;
};
