import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import About from "./components/pages/About";

function App() {
  const markComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos.filter((todo) => todo.id !== id)];
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      title: text,
      isCompleted: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "clean up the mess",
      isCompleted: false,
    },
    {
      id: 2,
      title: "take out the trash",
      isCompleted: false,
    },
    {
      id: 3,
      title: "hide the bodies",
      isCompleted: false,
    },
  ]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <div className="container">
              <TodoForm addTodo={addTodo} />
              <Todos
                todos={todos}
                markComplete={markComplete}
                deleteTodo={deleteTodo}
              />
            </div>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
