import { useState } from "react";
import { BsYinYang } from "react-icons/bs";
import { TbCherryFilled } from "react-icons/tb";

export function TodoItem({ todo }) {
  const [completed, setCompeleted] = useState(false);
  return (
    <div className="todo-item">
      {completed ? (
        <p className="todo-item-name-completed">{todo}</p>
      ) : (
        <p className="todo-item-name">{todo}</p>
      )}
      <button
        className="todo-item-status"
        onClick={() => setCompeleted(!completed)}
      >
        {completed ? <TbCherryFilled /> : <BsYinYang />}
      </button>
    </div>
  );
}
