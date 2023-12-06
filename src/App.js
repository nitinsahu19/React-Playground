import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = async () => {
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
        <MovieList movies={movies} />
      </section>
    </>
  );
}

export default App;
