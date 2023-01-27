import React from "react";

import UserItem from "./UserItem"

const UserList = (props) => {
  return <ul>
    {props.items.map(user => (
      <UserItem
        key={user.id}
        name={user.getName()}
        age={user.getAge()}
      ></UserItem>
    ))}
  </ul>
};

export default UserList;