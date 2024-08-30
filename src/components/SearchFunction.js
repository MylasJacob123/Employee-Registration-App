import React, { useState } from "react";
import "../components/SearchFunction.css";

const SearchFunction = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      {/* <label><span>Search</span></label> */}
      <div class="search-content">
        <input
          className="search-input"
          type="number"
          placeholder="Search by ID"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchFunction;
