import React, { useState } from "react";
import styles from "../UI/ErrorModal.module.css";
import btn_styles from "./Button.module.css";
import Card from "./Card";

const ErrorModal = (props) => {
  const clickHandler = (events) => {
    events.preventDefault();
    props.onOkay();
  };

  return (
    <div className={styles.backdrop}>
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
    </div>
  );
};

export default ErrorModal;
