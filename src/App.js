import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {

  const markComplete = id => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newTodos);
  }

  const deleteTodo = id => {
    const newTodos = [...todos.filter(todo => todo.id !== id)]
    setTodos(newTodos);
  }

  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        title: 'clean up the mess',
        isCompleted: false
      },
      {
        id: 2,
        title: 'take out the trash',
        isCompleted: false
      },
      {
        id: 3,
        title: 'hide the bodies',
        isCompleted: false
      }
    ]
  )

  return (
    <div className="App">
      <div className="todo-list">
        <Todos todos={todos} markComplete={markComplete} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
