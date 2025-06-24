import { useTodo } from "../context/TodoContext.jsx";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todoList } = useTodo();
  return (
    <div className="todo-list">
      {todoList.map((todo, index) => {
        return <TodoItem key={index} todo={todo} />;
      })}
    </div>
  );
}
