import { Movie, SearchResult } from '../types/movies.types';

export const moviesMock: Movie = {
  Title: 'The Lord of the Rings: The Fellowship of the Ring',
  Year: '2001',
  Rated: 'PG-13',
  Released: '19 Dec 2001',
  Runtime: '178 min',
  Genre: 'Action, Adventure, Drama',
  Director: 'Peter Jackson',
  Writer: 'J.R.R. Tolkien, Fran Walsh, Philippa Boyens',
  Actors: 'Elijah Wood, Ian McKellen, Orlando Bloom',
  Plot: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
  Language: 'English, Sindarin',
  Country: 'New Zealand, United States, United Kingdom',
  Awards: 'Won 4 Oscars. 125 wins & 126 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.9/10' },
    { Source: 'Rotten Tomatoes', Value: '92%' },
    { Source: 'Metacritic', Value: '92/100' },
  ],
  Metascore: '92',
  imdbRating: '8.9',
  imdbVotes: '2,062,742',
  imdbID: 'tt0120737',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: '$319,372,078',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

export const searchResultsMock: SearchResult = {
  Search: [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Rings of Power',
      Year: '2022–',
      imdbID: 'tt7631058',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmVmZGQ2ZTctYzE4NC00YzkxLThhNjYtNGIyZjJmZGEwMjUzXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNThlY2NkYmMtNTFhNi00MzBiLWJmNzEtZjk5MzYwYWU2MjllXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZmI4ZmIxOGQtMGY2ZS00Y2Y5LTllMDItYzllOWFmMTNlMmY2XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMGFmNWUwMTItMmM1Mi00YmFmLWE3Y2YtNjIyYTcxN2M5MjY3XkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZmNiYWZmNTMtNzc1MC00OTg4LWJiNWYtMzNkY2IzZjVlMmFiXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BY2RiOTM0ZDgtNDRlMi00MDMzLWI1NDYtY2NjZDM4YTkwNWVlXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of Illusions',
      Year: '1995',
      imdbID: 'tt0113690',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDg1OTc0MDQwNl5BMl5BanBnXkFtZTcwMjQ3NDk0NA@@._V1_SX300.jpg',
    },
  ],
  totalResults: '830',
  Response: 'True',
};
