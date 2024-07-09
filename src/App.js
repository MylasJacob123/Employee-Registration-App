// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import EmployeeForm from "./components/form";

// function App() {
  // const [newEmployee, setEmployee] = useState([]);
  // const add = (
  //   FirstName,
  //   MiddleName,
  //   LastName,
  //   DateOfBirth,
  //   Gender,
  //   Age,
  //   IdNumber,
  //   Position,
  //   Image,
  //   Email,
  //   MobileNumber,
  //   StreetAddress,
  //   Suburb,
  //   City,
  //   PostalCode,
  //   Province
  // ) => {
  //   setEmployee((newEmployee) => [
  //     ...newEmployee,
  //     {
  //       FirstName: FirstName,
  //       MiddleName: MiddleName,
  //       LastName: LastName,
  //       DateOfBirth: DateOfBirth,
  //       Gender: Gender,
  //       Age: Age,
  //       IdNumber: IdNumber,
  //       Position: Position,
  //       Image: Image,
  //       Email: Email,
  //       MobileNumber: MobileNumber,
  //       StreetAddress: StreetAddress,
  //       Suburb: Suburb,
  //       City: City,
  //       PostalCode: PostalCode,
  //       Province: Province
  //     },
  //   ]);
  // };
// const [transactions, setTransactions] = useState([])
//  const add = (transactionItems, amount, transactionType) => {
//   setTransactions((transactions) => [...transactions, {transactionItems: transactionItems, amount: amount, transactionType:transactionType}])
//  }
//   return (
//     <div className="App">
//       <EmployeeForm add={add} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm"; // Make sure the import path is correct

function App() {
  const [transactions, setTransactions] = useState([]);

  const add = (transactionItems, amount, transactionType) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions, 
      { transactionItems, amount, transactionType }
    ]);
  }

  return (
    <div className="App">
      <EmployeeForm add={add} />
      <h2>Transactions List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.transactionItems} - {transaction.amount} - {transaction.transactionType}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
