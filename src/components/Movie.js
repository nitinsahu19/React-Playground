import classes from "./Movie.module.css";

const Movie = (props) => {
  const deleteHandler = async () => {
    try {
      const response = await fetch(
        `https://react-http-caada-default-rtdb.firebaseio.com/movies/${props.id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }
    } catch (error) {
      console.error("There was an error deleting the movie:", error.message);
    }
  };
  return (
    <>
      <li id={props.id} className={classes.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
        <button onClick={deleteHandler} className={classes.btn}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Movie;
