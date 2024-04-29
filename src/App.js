import { useState, useEffect } from "react";
import Footer from './components/Footer';
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import './index.css';

function App() {
  const [InputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filteredHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filteredHandler();
  }, [todos, status]);

  return (
    <div>
      <section className="todoapp">
        <Header
          InputText={InputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
