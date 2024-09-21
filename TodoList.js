import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onEditTodo, onDeleteTodo, onToggleDone, onMoveTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
          onToggleDone={onToggleDone}
          onMoveTodo={onMoveTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;