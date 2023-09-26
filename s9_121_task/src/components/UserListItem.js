import React, { useState } from "react";

const UserListItem = (props) => {

  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);

  return (
      <ul>
        <li>{name} ({age})</li>
      </ul>
  );
};

export default UserListItem;
