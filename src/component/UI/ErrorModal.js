import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDom from "react-dom"; // react-dom is in package.json

// this will be a new component and we are adding in the same file because we use this Backdrop component in junction with our modal,  sol we will store all those components in one big file but we could also split it into multiple components file specially if we use these components in junction with other components.
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,           /* using onConfirm for cancel by clicking on backdrop again */
        document.getElementById("backdrop-root")
      )}
      {/* repeat this for an actual overlay */}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

// createPortal()   method takes 2 arguments =>  1. first one is React node that should be rendered    2. second argument is a pointer to that container in a real dom where this element should be rendered in.
