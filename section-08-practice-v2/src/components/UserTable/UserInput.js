import React, {useState} from "react"

import Button from "../UI/Button";
import User from "../User";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(false);

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  };
  
  const userAgeChangeHandler = (event) => {
    let value = event.target.value;
    isValidAge(value);

    if (isValid) {setEnteredAge(value)};
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    if (!isValid) {
      const sentence = "Invalid Age"
      props.isValidAge(isValid, sentence);
      return;
    };

    const user = new User(enteredName, enteredAge);
    props.addUser(user)
  };

  const isValidAge = (value) => {
    const parsedValue = +value
    if (!Number.isInteger(parsedValue)) {
      setIsValid(false)
      return;
    };
    
    if (parsedValue < 0) {
      setIsValid(false)
      return;
    };

    setIsValid(true);
  };
  
  return <form>
    <label>UserName</label>
    <input type="text" onChange={userNameChangeHandler} />
    <label>Age</label>
    <input type="text" onChange={userAgeChangeHandler} className={!isValid&&styles.invalid} />
    <Button type="submit" onClick={onClickHandler}/>
  </form>
};

export default UserInput;