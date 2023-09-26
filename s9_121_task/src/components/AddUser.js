import React, { useState } from "react";
import styles from "./AddUser.module.css";
import btn_styles from "../UI/Button.module.css";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setVaild] = useState(true);
  const [error, setError] = useState();

  const inputChangeHandler = (event, name) => {
    if (name === "username") {
      setUserName(event.target.value);
    } else {
      setAge(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.lenght === 0 || age.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      setVaild(false);
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      setVaild(false);
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      userName: userName,
      age: age,
    });

    setUserName("");
    setAge("");
  };

  const clickOkayHandler = (test) => {
    setError("");
    setVaild(true);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        {/* {!isValid && <ErrorModal onOkay={clickOkayHandler}></ErrorModal>} */}
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onOkay={clickOkayHandler}
          ></ErrorModal>
        )}
        <div className={styles.input}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={(event) => inputChangeHandler(event, "username")}
          />
          <label>Age (Years)</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={(event) => inputChangeHandler(event, "age")}
          />
          <button type="submit" className={btn_styles.button}>
            Add User
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
