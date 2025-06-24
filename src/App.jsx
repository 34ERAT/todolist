import "./App.css";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContextProvider";

function App() {
  return (
    <div className="todo">
      <h1 className="todo-list-heading">All Tasks</h1>
      <TodoContextProvider>
        <InputForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
