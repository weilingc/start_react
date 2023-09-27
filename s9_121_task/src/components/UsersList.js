import React, { useState } from "react";
// import UserListItem from "./UserListItem";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  // if (!props.userInput || props.userInput.length === 0) {
  //   return null;
  // }

  return (
    <Card className={styles.users}>
      <ul>
        {props.userInput.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
