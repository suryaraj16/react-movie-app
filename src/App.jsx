import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import { fetchMovies } from "./services/api";
import "./App.css";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    loadMovies();
  }, []);

  return (
    <div className="container">
      <h1>Popular Movies</h1>

      <div className="movie-grid">
        {movies && movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default App;
