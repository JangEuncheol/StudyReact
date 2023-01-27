import React from "react"

import styles from "./UserItem.module.css"

const UserItem = (props) => {
  return <li className={styles["list-item"]}>
    <label>{`${props.name} (${props.age})`}</label>
  </li>
};

export default UserItem;