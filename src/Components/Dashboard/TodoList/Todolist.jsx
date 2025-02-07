import React, { useState } from 'react';
import './Todolist.css'
function FormTodo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  
  // Add Task
  const handleAddTask = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle Task Completion
  const handleToggleCompletion = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Task
  const handleEditTask = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompletion(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
            <button onClick={() => {
              const newText = prompt("Edit Task", todo.text);
              if (newText) handleEditTask(todo.id, newText);
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormTodo;
