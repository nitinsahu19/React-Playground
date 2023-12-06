import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films");
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
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <section>
        <button className="btn" onClick={fetchMovieHandler}>
          Fetch Movies
        </button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length == 0 && (
          <p className="loading-text">Movies not found !!!</p>
        )}
        {isLoading && <p className="loading-text">Loading...</p>}
      </section>
    </>
  );
}

export default App;
