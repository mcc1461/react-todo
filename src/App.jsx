import React, { useState, useRef } from "react";
import "./styles.css";
import logo from "./assets/logo.png";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage on initial load
    console.log("Loading todos from localStorage...");
    const data = localStorage.getItem("todos");
    if (data) {
      try {
        const parsedTodos = JSON.parse(data);
        console.log("Todos loaded from localStorage:", parsedTodos);
        return parsedTodos;
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
        return [];
      }
    } else {
      console.log("No todos found in localStorage.");
      return [];
    }
  });
  const [editMode, setEditMode] = useState(null);
  const inputRef = useRef(null);

  // Helper function to log localStorage content
  const logLocalStorage = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(`localStorage[${key}] = ${localStorage.getItem(key)}`);
    }
  };

  // Save todos to localStorage
  const saveTodosToLocalStorage = (todos) => {
    console.log("Saving todos to localStorage...");
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("Todos saved to localStorage:", todos);
    } catch (error) {
      console.error("Failed to save todos to localStorage:", error);
    }
    logLocalStorage();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    if (editMode) {
      const updatedTodos = todos.map((todo) =>
        editMode === todo.id ? { ...todo, name: newTodo } : todo
      );
      setTodos(updatedTodos);
      saveTodosToLocalStorage(updatedTodos);
      setEditMode(null);
      console.log("Todo updated:", newTodo);
    } else {
      const newTodos = [
        ...todos,
        { id: crypto.randomUUID(), name: newTodo, completed: false },
      ];
      setTodos(newTodos);
      saveTodosToLocalStorage(newTodos);
      console.log("New todo added:", newTodo);
    }

    setNewTodo("");
  };

  const toggleTodo = (id, checked) => {
    const updatedTodos = todos.map((todo) =>
      todo.id !== id ? todo : { ...todo, completed: checked }
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    console.log("Todo toggled:", id, checked);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    console.log("Todo deleted:", id);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setNewTodo(editTodo.name);
    setEditMode(id);
    console.log("Editing todo:", id, editTodo.name);
  };

  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="navbar-text">mcc Todo-List</h1>
      </nav>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            id="item"
            ref={inputRef}
          />
        </div>
        <button type="submit" className="btn">
          {editMode !== null ? <span className="span-edit">Edit Item</span> : "Add Item"}
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && <li className="list-no-items">No items</li>}
        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              <span>{todo.name}</span>
            </label>
            <div className="buttons">
              <button className="btn btn-primary" onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
