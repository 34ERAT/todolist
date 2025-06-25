import { useState } from "react";
import { TodoContext } from "./TodoContext";
export function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  // const [status, setStatus] = useState(false);
  return (
    <TodoContext.Provider value={{ setTodoList, todoList }}>
      {children}
    </TodoContext.Provider>
  );
}
