import React, { useState, Fragment } from "react";

import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

const App = () => {

  const [userData, setUserData] = useState([])

  const addUserHandler = userInput => {
    setUserData(prevInput => {
      return [
        ...prevInput,
        userInput
      ]
    })
  };

  return (
    <>
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList userInput={userData}></UsersList>
    </Fragment>
    </>
  );
};

export default App;
