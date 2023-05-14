import React from 'react'
const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};


export default AddTask
