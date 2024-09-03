import React, { useState } from "react";
import AddFunction from "./components/AddFunction.js";
import EmployeeRegister from "./components/EmployeeRegister.js";
import UpdateFunction from "./components/UpdateFunction.js";
import SearchFunction from "./components/SearchFunction.js";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(true);  // Registration form toggle
  const [btn1Toggle, setBtn1Toggle] = useState(false);  // Employee list toggle
  const [editToggle, setEditToggle] = useState(false);  // Update form toggle

  const addEmployee = (firstName, lastName, email, age, gender, phoneNumber, position, id, image) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { firstName, lastName, email, age, gender, phoneNumber, position, id, image },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id
          ? { ...employee, ...updatedEmployee }
          : employee
      )
    );
    setEmployeeToEdit(null);
    setEditToggle(false);  // Hide the update form
    setBtn1Toggle(true);  // Show the employee list
  };

  const editEmployee = (employee) => {
    setEmployeeToEdit(employee);
    setEditToggle(true);
    setToggle(false);
    setBtn1Toggle(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.id.includes(searchTerm)
  );

  const handleToggle = (form) => {
    if (form === "registration-form") {
      setToggle(true);
      setBtn1Toggle(false);
      setEditToggle(false);
    } else if (form === "employee-list") {
      setToggle(false);
      setBtn1Toggle(true);
      setEditToggle(false);
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-heading">Employee Registration App</h1>
        <div class="main-components">
          <div className="important-buttons">
            <button
              onClick={() => handleToggle("registration-form")}
              className={`form-btn ${toggle ? "active" : ""}`}
            >
              Employee Register
            </button>
            <button
              onClick={() => handleToggle("employee-list")}
              className={`form-btn ${btn1Toggle ? "active" : ""}`}
            >
              Employee List
            </button>
          </div>
          <div className="form-content">
            {toggle && <AddFunction add={addEmployee} />}
            {btn1Toggle && (
              <>
                <SearchFunction onSearch={handleSearch} />
                <EmployeeRegister
                  employees={filteredEmployees}
                  onDelete={deleteEmployee}
                  onEdit={editEmployee}
                />
              </>
            )}
          </div>
        </div>
      </div>
  
      {editToggle && (
        <UpdateFunction 
          employee={employeeToEdit} 
          onUpdate={updateEmployee} 
          onCancel={() => {
            setEditToggle(false);
            setBtn1Toggle(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
