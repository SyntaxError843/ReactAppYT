import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

function Todos({ todos }) {
  return (
    todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
