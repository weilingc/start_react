import React, { useState } from "react";

import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

const App = () => {

  const [userData, setUserData] = useState('')

  const addUserHandler = userInput => {
    setUserData(prevInput => {
      return [
        ...prevInput,
        userInput
      ]
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList userInput={userData}></UsersList>
    </div>
  );
};

export default App;
