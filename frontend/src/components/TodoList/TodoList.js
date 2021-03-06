import Todo from "../Todo/Todo";
import styles from "./TodoList.module.scss";

const TodoList = (props) => {
  return (
    <ul className={styles.todo_list}>
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={props.deleteTodo}
            updateTodo={props.updateTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
