import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const soretedTodos =todos.slice().sort((a,b)=>Number(a.done-b.done))
  return (
    <div className={styles.list}>
      {soretedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
