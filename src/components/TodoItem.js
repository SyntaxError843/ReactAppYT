import React from 'react';

function TodoItem({ todo }) {
  return (
    <div>
        { todo.title }
    </div>
  );
}

export default TodoItem;
