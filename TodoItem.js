import React, { useState } from 'react';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { ReactComponent as UpIcon } from '../icons/up.svg';
import { ReactComponent as DownIcon } from '../icons/down.svg';

function TodoItem({ index, todo, onEditTodo, onDeleteTodo, onToggleDone, onMoveTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditChange = (event) => {
    setEditText(event.target.value);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    onEditTodo(index, editText);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onToggleDone(index)}>
            {todo.done ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => onDeleteTodo(index)}>
            <DeleteIcon />
          </button>
          <button
            onClick={() => onMoveTodo(index, -1)}
            disabled={index === 0}
          >
            <UpIcon />
          </button>
          <button
            onClick={() => onMoveTodo(index, 1)}
            disabled={index === todos.length - 1}
          >
            <DownIcon />
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;