import { useState } from "react";
import { TodoContext } from "./TodoContext";
export function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoContext.Provider value={{ setTodoList, todoList }}>
      {children}
    </TodoContext.Provider>
  );
}
