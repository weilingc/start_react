import React, { useState } from "react";
import ReactDOM from "react-dom";

import styles from "../UI/ErrorModal.module.css";
// import btn_styles from "./Button.module.css";
import Button from './Button';

import Card from "./Card";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onOkay}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.domOnOkay}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  // const clickHandler = (events) => {
  //   events.preventDefault();
  //   props.onOkay();
  // };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onOkay}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          domOnOkay={props.onOkay}
        />,
        document.getElementById("overlay-root")
      )}
      {/* <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.content}>
            {props.message}
            <button className={btn_styles.button} onClick={clickHandler}>
              Okay
            </button>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default ErrorModal;
