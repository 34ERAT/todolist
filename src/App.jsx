import { TiTick } from "react-icons/ti";
import "./App.css";
import { useState } from "react";

function TodoItem({ name, description }) {
  return (
    <div className="todo-item">
      <p className="todo-item-name">{name}</p>
      <p className="todo-item-description">{description}</p>
    </div>
  );
}
function InputForm({ setName, setDescripition, setTask, newTask }) {
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Tasks"
        value={newTask.name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={newTask.description}
        onChange={(e) => {
          setDescripition(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setTask((prev) => {
            return [...prev, newTask];
          });
          setName("");
          setDescripition("");
        }}
      >
        add
      </button>
    </form>
  );
}
function App() {
  const [name, setName] = useState("");
  const [description, setDescripition] = useState("");
  const [tasks, setTask] = useState([]);

  return (
    <div className="todo">
      <h1 className="todo-list-heading">All Tasks</h1>
      <InputForm
        setTask={setTask}
        setName={setName}
        setDescripition={setDescripition}
        newTask={{ name, description }}
      />
      <div className="todo-list">
        {tasks.map((task, index) => {
          const { name, description } = task;
          return <TodoItem key={index} name={name} description={description} />;
        })}
      </div>
    </div>
  );
}

export default App;
