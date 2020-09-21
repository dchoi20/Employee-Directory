import React, { useState, useEffect } from "react";
import "./EmployeeList.css";
import API from "../../utils/API";
import SearchForm from "../SearchForm/searchForm";
export default function Employees() {
  const [employeeState, setEmployeeState] = useState({
    employees: [],
    filteredEmployees: [],
  });

  useEffect(() => {
    API.getUsers().then((res) => {
      setEmployeeState({
        ...employeeState,
        employees: res.data.results,
        filteredEmployees: res.data.results,
      });
    });
  }, []);

  const employeeSearch = (e) => {
    let searchValue = e.target.value;
    searchValue = searchValue.toLowerCase();
    let searchResults = [...employeeState.employees];
    searchResults = searchResults.filter((employee) => {
      let fullName = `${employee.name.first}${employee.name.last}`.toLowerCase();
      return fullName.includes(searchValue);
    });
    setEmployeeState({ ...employeeState, filteredEmployees: searchResults });
  };

  return (
    <div id="contain">
      <SearchForm employeeSearch={employeeSearch} />
      {employeeState.filteredEmployees.map((user, i) => (
        <div>
          <ul>
            <img src={user.picture.medium} alt="" />
            <li>{user.name.first}</li>
            <li>{user.name.last}</li>
            <li>{user.cell}</li>
            <li>{user.email}</li>
            <li>{user.dob.date}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
