import React from 'react';

function EmployeeList({ employees, onDelete }) {


  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Image</th>
            <th>Position</th>
            <th>Identification Number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.image ? employee.image.name : ""}</td>
              <td>{employee.position}</td>
              <td>{employee.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
                  
                
    </div>
  );
}
export default EmployeeList;
