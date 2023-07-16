import React, { useState } from "react";
import "./styles.css";

const TaskForm = ({ onTaskAdd }) => {
  const [task, setTask] = useState({
    id: Math.random,
    name: "",
    date: "",
    description: "",
    priority: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      name: task.name,
      date: task.date,
      description: task.description,
      priority: task.priority,
      completed: false,
    };
    onTaskAdd(newTask);
    setTask({
      id: '',
      name: '',
      date: '',
      description: '',
      priority: '',
      completed: false,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Zadatak"
        value={task.name}
        onChange={handleInputChange}
      />
      <input
        className="input"
        type="date"
        name="date"
        value={task.date}
        onChange={handleInputChange}
      />
      <textarea
        className="textarea"
        name="description"
        placeholder="Opis zadatka"
        value={task.description}
        onChange={handleInputChange}
      />
      <select
        className="input"
        name="priority"
        value={task.priority}
        onChange={handleInputChange}
      >
        <option value="">Odredi važnost</option>
        <option value="low">Niska</option>
        <option value="medium">Srednja</option>
        <option value="high">Visoka</option>
      </select>
      <button className="button" type="submit">
        Dodaj zadatak
      </button>
    </form>
  );
};

export default TaskForm;
