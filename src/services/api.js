const API_KEY = "f5ea337c";

export const fetchMovies = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`
  );

  const data = await response.json();
  return data.Search;
};
