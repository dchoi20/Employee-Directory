import React from "react";

function SearchForm({ employeeSearch }) {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        onChange={employeeSearch}
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
