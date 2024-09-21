import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new to-do"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;