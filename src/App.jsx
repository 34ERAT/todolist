import "./App.css";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContextProvider";

function App() {
  return (
    <div className="todo">
      <TodoContextProvider>
        <div className="todo-header">
          <InputForm />
        </div>
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
