import { CgAdd } from "react-icons/cg";

export function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <p className="todo-item-name">{todo}</p>
      <div>
        <CgAdd />
      </div>
    </div>
  );
}
