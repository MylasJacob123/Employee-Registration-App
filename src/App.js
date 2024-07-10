import "./App.css";
import React, { useState } from "react";
import AddFunction from "./components/AddFunction";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  
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
    setEmployees(prevEmployees =>
      prevEmployees.filter(employee => employee.id !== id)
    );
  };

  return (
    <div className="App">
      <AddFunction add={addEmployee} />
      <EmployeeList employees={employees} onDelete={deleteEmployee} />
    </div>
  );
}

export default App;
