import React from 'react';
import TaskItem from './TaskItem';
import './styles.css';

const TaskList = ({ tasks, onDelete, onCompleteTask }) => {
  const handleDelete = (taskId) => {
    onDelete(taskId);
  };

  const handleCompleteTask = (taskId) => {
    onCompleteTask(taskId);
  };

  return (
    <div>
      <h2 className="list-title">Lista Zadataka</h2>
      <ul className="list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onCompleteTask={handleCompleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
