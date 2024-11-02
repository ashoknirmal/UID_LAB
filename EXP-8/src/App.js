import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [filter, setFilter] = useState('all'); // all, completed, pending

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          isCompleted: false,
        },
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setNewTask(text);
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newTask } : task
      )
    );
    setEditingTaskId(null);
    setNewTask('');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'pending') return !task.isCompleted;
    return true;
  });

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder={editingTaskId ? 'Edit task...' : 'Enter new task'}
        />
        {editingTaskId ? (
          <button onClick={() => editTask(editingTaskId)}>Update Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>

      <div className="filter">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      <ul className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleComplete(task.id)}
              />
              <span>{task.text}</span>
              <div className="buttons">
                <button className="edit" onClick={() => startEditing(task.id, task.text)}>
                  Edit
                </button>
                <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
}

export default App;
