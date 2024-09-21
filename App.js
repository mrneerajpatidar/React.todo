import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleDone = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const moveTodo = (index, direction) => {
    const updatedTodos = [...todos];
    const [movedItem] = updatedTodos.splice(index, 1);
    updatedTodos.splice(index + direction, 0, movedItem);
    setTodos(updatedTodos);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <AddTodo onAddTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onEditTodo={editTodo}
        onDeleteTodo={deleteTodo}
        onToggleDone={toggleDone}
        onMoveTodo={moveTodo}
      />
    </div>
  );
}

export default App;