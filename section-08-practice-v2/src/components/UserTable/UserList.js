import React from "react";

import UserItem from "./UserItem";


const UserList = (props) => {
  return <ul>
    {props.items.map(user => (
      <UserItem
        key={user.getId()}
        name={user.getName()}
        age={user.getAge()}
      />
    ))}
  </ul>
};

export default UserList;