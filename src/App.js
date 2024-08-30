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
  const [toggle, setToggle] = useState(true);
  const [btn1Toggle, setBtn1Toggle] = useState(false);

  const addEmployee = (
    firstName,
    lastName,
    email,
    age,
    gender,
    phoneNumber,
    position,
    id
  ) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { firstName, lastName, email, age, gender, phoneNumber, position, id },
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
  };

  const editEmployee = (employee) => {
    setEmployeeToEdit(employee);
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
    } else if (form === "employee-list") {
      setToggle(false);
      setBtn1Toggle(true);
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
  
      {employeeToEdit && (
        <UpdateFunction employee={employeeToEdit} onUpdate={updateEmployee} />
      )}
    </div>
  );
}

export default App;
