import React, { useState, useEffect } from "react";
import "./EmployeeTable.css";
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

  const onSortByName = (e) => {
    setEmployeeState({
      ...employeeState,
      filteredEmployees: employeeState.filteredEmployees.sort((a, b) => {
        let nameA = a.name.first.toUpperCase();
        let nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }),
    });
  };

  return (
    <div id="container">
      <SearchForm employeeSearch={employeeSearch} />
      <table className="highlight centered">
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={(e) => onSortByName(e)}>Name</th>
            <th>Cell Number</th>
            <th>Email</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {employeeState.filteredEmployees.map((user) => (
            <tr>
              <img src={user.picture.medium} alt="" />
              <td>
                {`${user.name.first}
                ${user.name.last}`}
              </td>
              <td>{user.cell}</td>
              <td>{user.email}</td>
              <td>{new Date(user.dob.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
