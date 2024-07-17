import React from "react";
import "../components/EmployeeRegister.css";

function EmployeeRegister({ employees, onDelete, onEdit }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (employee) => {
    onEdit(employee);
  };

  return (
    <div className="employee-register">
      <h2 className="employee-register-h">Employee List</h2>
      {employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Position</th>
              <th>Identification Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.age}</td>
                <td>{employee.gender}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.position}</td>
                <td>{employee.id}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(employee)}>
                    Edit
                  </button>
                  <br />
                  <button
                    className="delete"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="table-statement">No employees added yet.</p>
      )}
    </div>
  );
}

export default EmployeeRegister;
