import axios from 'axios';
import { Movie } from '../types/movies.types';

const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export interface ApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export const searchMovies = async (searchTerm: string, pageParam: number) => {
  const { data } = await axios.get<ApiResponse>(`${baseUrl}`, {
    params: {
      apikey: apiKey,
      s: searchTerm,
      page: pageParam,
      type: 'movie',
    },
  });

  return {
    movies: data.Search.filter((movie) => movie.Poster !== 'N/A'), // Filter out movies without a poster,
    totalResults: parseInt(data.totalResults, 10),
    nextPage: pageParam + 1,
  };
};

export const getMovieById = async (id: string) => {
  const { data } = await axios.get<Movie>(`${baseUrl}`, {
    params: {
      apikey: apiKey,
      i: id,
    },
  });

  return data;
};

export const getMovieByTitle = async (title: string) => {
  const { data } = await axios.get<Movie>(`${baseUrl}`, {
    params: {
      apikey: apiKey,
      t: title,
    },
  });

  return data;
};
