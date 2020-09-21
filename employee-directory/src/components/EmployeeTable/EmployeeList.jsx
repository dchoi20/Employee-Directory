import React from "react";
import "./EmployeeList.css";

export default function Employees({ employeeSearch }) {
  return (
    <div id="contain">
      {employeeSearch.filteredUsers.map((user, i) => (
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
