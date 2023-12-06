import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
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
