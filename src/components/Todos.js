import React from 'react';
import TodoItem from './TodoItem'

function Todos({ todos }) {
  return (
    todos.map(todo => (
      <TodoItem todo={ todo } />
    ))
  );
}

export default Todos;
