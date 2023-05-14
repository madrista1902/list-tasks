import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions';

const EditTask = ({ task, toggleEdit }) => {
  const [description, setDescription] = useState(task.description);
  const [isDone, setIsDone] = useState(task.isDone);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { ...task, description, isDone };
    dispatch(editTask(updatedTask));
    toggleEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
        Done
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={toggleEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditTask;