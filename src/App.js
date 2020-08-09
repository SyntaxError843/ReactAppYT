import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import About from "./components/pages/About";
import Axios from "axios";

function App() {
  const markComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        Axios.put(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          todo
        ).then((res) => console.log(res.data));
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) => {
        const newTodos = [...todos.filter((todo) => todo.id !== id)];
        setTodos(newTodos);
      }
    );
  };

  const addTodo = (text) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: text,
      completed: false,
    }).then((res) => {
      const newTodos = [...todos, res.data];
      setTodos(newTodos);
    });
  };

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "clean up the mess",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "take out the trash",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "hide the bodies",
  //     completed: false,
  //   },
  // ]);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((res) => setTodos(res.data));
  }, []);

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
