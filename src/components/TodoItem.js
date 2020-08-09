import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, markComplete, deleteTodo }) {
  return (
    <div style={getSyle(todo)}>
      <input
        type="checkbox"
        onChange={() => {
          markComplete(todo.id);
        }}
        checked={todo.completed}
      />
      {todo.title}
      <button style={btnStyle} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const getSyle = (todo) => {
  return {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" : "",
  };
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
