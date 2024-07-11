import React, { useState } from "react";
import "../components/SearchFunction.css"

const SearchFunction = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <label><span>Search</span></label>
      <input className="search-input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchFunction;
