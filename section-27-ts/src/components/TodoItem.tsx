import classes from "./TodoItem.module.css"
import Todo from "../models/todo";

const TodoItem: React.FC<{ data: Todo, onDeleteTodo: (id: string) => void}> = props => {
  const deleteHandler = () => {
    props.onDeleteTodo(props.data.id);
  };

  return <li className={classes.item} onClick={deleteHandler}>
    {props.data.text}
  </li>
};

export default TodoItem;