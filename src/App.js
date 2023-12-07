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
      const response = await fetch(
        "https://react-http-caada-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key]["release-date"],
          openingText: data[key]["opening-text"],
        });
      }

      setMovies(loadedMovies);
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
