import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError('');
    } catch (err) {
      setError('Failed to load tasks. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (title) => {
    try {
      const newTask = await createTask(title);
      setTasks([newTask, ...tasks]);
    } catch (err) {
      setError('Failed to add task.');
    }
  };

  const handleToggleTask = async (id, completed) => {
    try {
      const updated = await updateTask(id, { completed: !completed });
      setTasks(tasks.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      setError('Failed to update task.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      setError('Failed to delete task.');
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>📝 My To-Do List</h1>
          <p className="subtitle">
            {tasks.length} tasks · {completedCount} completed
          </p>
        </header>

        <TaskForm onAdd={handleAddTask} />

        {error && <div className="error-banner">{error}</div>}

        {loading ? (
          <p className="loading">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
