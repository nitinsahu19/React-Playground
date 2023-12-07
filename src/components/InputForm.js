import React, { useState } from "react";
import classes from "./InputForm.module.css";

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const titleHandler = (event) => setTitle(event.target.value);

  const openingTextHandler = (event) => setOpeningText(event.target.value);

  const releaseDateHandler = (event) => setReleaseDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const newMovie = {
      title,
      "opening-text": openingText,
      "release-date": releaseDate,
    };

    // printing the new movie on browser-console
    console.log(newMovie);

    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  };

  return (
    <form className={classes.inputForm} onSubmit={submitHandler}>
      <label htmlFor="title" className={classes.label}>
        Title
      </label>
      <input
        id="title"
        type="text"
        name="title"
        className={classes.inputField}
        placeholder="Enter title"
        onChange={titleHandler}
        value={title}
      />

      <label htmlFor="OpeningText" className={classes.label}>
        Opening Text
      </label>
      <textarea
        id="OpeningText"
        name="openingText"
        className={classes.textArea}
        placeholder="Enter opening text"
        onChange={openingTextHandler}
        value={openingText}
      ></textarea>

      <label htmlFor="releaseDate" className={classes.label}>
        Release Date
      </label>
      <input
        id="releaseDate"
        type="date"
        name="releaseDate"
        className={classes.datePicker}
        onChange={releaseDateHandler}
        value={releaseDate}
      />

      <button className={classes.btn}>Add Movie</button>
    </form>
  );
};

export default InputForm;
