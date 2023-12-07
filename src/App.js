import { useCallback, useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import InputForm from "./components/InputForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => fetchMovieHandler(), [fetchMovieHandler]);

  return (
    <>
      <section>
        <InputForm />
      </section>
      <section>
        {isLoading && <p className="loading-text">Loading...</p>}
        {!error && <MovieList movies={movies} />}
      </section>
    </>
  );
}

export default App;
