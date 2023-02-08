import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{data: Todo}> = props => {
  console.log(props)
  return <li>
    {props.data.text}
  </li>
};

export default TodoItem;