
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTaskStatus, deleteTask } from '../../JS/Actions';
import AddTask from '../AddTask/AddTask';
import FilterTask from '../FilterTask/FilterTask';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'done') {
      return task.isDone;
    } else if (filter === 'notDone') {
      return !task.isDone;
    }
    return true;
  });

  return (
    <div>
      <h2>Tasks</h2>
      <FilterTask onFilterChange={handleFilterChange} />
      <ul>
        {filteredTasks.map((task) => (
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

