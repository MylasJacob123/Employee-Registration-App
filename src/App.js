import "./App.css";
import { useState } from "react";
import AddFunction from "./components/AddFunction";
import EmployeeList from "./components/EmployeeList"

function App() {
  const [employees, setEmployees] = useState([]);
  
  const add = (
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

  return (
    <div className="App">
      <AddFunction add={add} />
      <EmployeeList employees={ employees } />
    </div>
  );
}

export default App;
