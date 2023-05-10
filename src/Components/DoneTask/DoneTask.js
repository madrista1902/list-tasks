import React from 'react';

const DoneTask = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task.description}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};


export default DoneTask;
