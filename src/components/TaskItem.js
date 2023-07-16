import React, { useState } from 'react';
import './styles.css';

const TaskItem = ({ task, onDelete, onCompleteTask }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleCompleteTask = () => {
    onCompleteTask(task.id);
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className={`task-list task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <div>
        <button
          className={`button buttonSH ${task.completed ? 'completed-button' : ''}`}
          onClick={handleToggleDetails}
        >
          {showDetails ? 'Sakrij Detalje' : 'Prikaži Detalje'}
        </button>
        {showDetails && (
          <div className="task-details">
            <p>Date: {task.date}</p>
            <p>Description: {task.description}</p>
            <p>Priority: {task.priority}</p>
          </div>
        )}
        <button
          className={`button buttonD ${task.completed ? 'completed-button' : ''}`}
          onClick={handleDelete}
        >
          Obriši
        </button>
        {!task.completed && (
          <button
            className={`button buttonC ${task.completed ? 'completed-button' : ''}`}
            onClick={handleCompleteTask}
          >
            Obilježi kao završeno
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
