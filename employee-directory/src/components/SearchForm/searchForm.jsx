import React from "react";

function SearchForm({ searchForEmployee }) {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        onChange={searchForEmployee}
        name="search"
        type="search"
        className="form-control"
        placeholder="Search for Employee"
        id="search"
      />
    </div>
  );
}

export default SearchForm;
