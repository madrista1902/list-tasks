import React, { useState } from 'react';

const FilterTask = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div>
      
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
    </div>
  );
};

export default FilterTask;
