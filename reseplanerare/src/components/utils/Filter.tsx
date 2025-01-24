import React from 'react';

interface FilterProps {
  filter: string;
  onFilterChange: (value: string) => void;
  placeholder?: string;
}

function Filter({ filter, onFilterChange, placeholder = 'Sök...' }: FilterProps): JSX.Element {
  return (
    <div className="filter-container">
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder={placeholder}
        className="filter-input"
      />
    </div>
  );
}

export default Filter;