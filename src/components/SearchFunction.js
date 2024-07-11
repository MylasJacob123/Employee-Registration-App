import React, { useState } from 'react';

const SearchFunction = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchFunction;
