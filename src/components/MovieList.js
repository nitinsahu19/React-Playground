import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  return (
    <>
      <ul className={classes.moviesList}>
        {props.movies.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
