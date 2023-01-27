import React, {useState} from "react";

import styles from "./UserInput.module.css";
import User from "./User"

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  };
  
  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  };
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const user = new User(enteredName, enteredAge)
    props.onAddUserList(user);
  };
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]}`}>
        <label>Username</label>
        <input type="text" onChange={userNameChangeHandler} />
        <label>Age (Years)</label>
        <input type="text" onChange={userAgeChangeHandler} />
      </div>
      <button type="submit" className={styles.button}>Add User</button>
    </form>
  );
};

export default UserInput;
