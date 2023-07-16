import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './components/styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Dodaj Zadatak</h1>
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onDelete={handleTaskDelete}
        onCompleteTask={handleTaskComplete}
      />
    </div>
  );
};

export default App;
