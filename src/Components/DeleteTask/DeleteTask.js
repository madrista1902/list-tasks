import React from 'react'

const DeleteTask =({ handleDeleteTask }) => {
  return (
    <button onClick={handleDeleteTask}>Delete</button>
  );
};


export default DeleteTask
