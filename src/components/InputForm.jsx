import { useState } from "react";
import { useTodo } from "../context/TodoContext.jsx";
import { CgAdd } from "react-icons/cg";

export function InputForm() {
  const [todo, setTodo] = useState("");
  const { setTodoList } = useTodo();
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Enter you today task ..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setTodoList((prevTodoList) => {
            return [...prevTodoList, todo];
          });
          setTodo("");
        }}
      >
        <CgAdd />
      </button>
    </form>
  );
}
