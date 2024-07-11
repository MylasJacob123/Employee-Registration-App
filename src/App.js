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

  const addEmployee = (
    firstName,
    lastName,
    email,
    phoneNumber,
    image,
    position,
    id
  ) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { firstName, lastName, email, phoneNumber, image, position, id },
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

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phoneNumber.includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.includes(searchTerm)
  );

  return (
      <div className="App">
        <SearchFunction onSearch={handleSearch} />
          <AddFunction add={addEmployee} />
          <EmployeeRegister
            employees={filteredEmployees}
            onDelete={deleteEmployee}
            onEdit={editEmployee}
          />
          {employeeToEdit && (
            <UpdateFunction employee={employeeToEdit} onUpdate={updateEmployee} />
          )}
      </div>
  );
}

export default App;
