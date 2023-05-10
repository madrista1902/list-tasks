import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTaskStatus, deleteTask } from '../../JS/Actions';
import AddTask from '../AddTask/AddTask';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (newTask) => {
    dispatch(addTask(newTask));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => handleToggleTask(task.id)}
            />
            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
              {task.description}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddTask onAdd={handleAddTask} />
    </div>
  );
};

export default ListTask;
