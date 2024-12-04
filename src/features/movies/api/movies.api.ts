import axios from 'axios';

const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (searchTerm: string) => {
  const { data } = await axios.get(`${baseUrl}`, {
    params: {
      apikey: apiKey,
      s: searchTerm,
    },
  });

  return data;
};

export const getMovieById = async (id: string) => {
  const { data } = await axios.get(`${baseUrl}`, {
    params: {
      apikey: apiKey,
      i: id,
    },
  });

  return data;
};
