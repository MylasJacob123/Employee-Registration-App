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

  return (
    <div className="App">
      <div className="toggle">
        <button
          onClick={() => setToggle(!toggle)}
          className={`form-btn ${toggle ? "active" : ""}`}
        >
          Employee Registration Form
        </button>
        {toggle && <AddFunction add={addEmployee} />}
      </div>

      <div className="toggle">
        <button
          onClick={() => setBtn1Toggle(!btn1Toggle)}
          className={`form-btn ${btn1Toggle ? "active" : ""}`}
        >
          Employee Register
        </button>
        {btn1Toggle && <SearchFunction onSearch={handleSearch} />}
        {btn1Toggle && (
          <EmployeeRegister
            employees={filteredEmployees}
            onDelete={deleteEmployee}
            onEdit={editEmployee}
          />
        )}
      </div>

      {employeeToEdit && (
        <UpdateFunction employee={employeeToEdit} onUpdate={updateEmployee} />
      )}
    </div>
  );
}

export default App;
