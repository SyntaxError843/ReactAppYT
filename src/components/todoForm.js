import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        style={{ flex: "10", padding: "5px" }}
        type="text"
        name="title"
        placeholder="Add Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn" style={{ flex: "1" }}>
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
