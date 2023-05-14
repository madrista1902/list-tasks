import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import EditTask from './EditTask';

const Task = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {editMode ? (
        <EditTask task={task} toggleEdit={toggleEdit} />
      ) : (
        <>
          <p>{task.description}</p>
          <p>{task.isDone ? 'Done' : 'Not Done'}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;