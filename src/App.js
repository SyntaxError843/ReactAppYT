import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
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
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
