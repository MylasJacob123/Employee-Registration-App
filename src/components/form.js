// import React from "react";
// import {useState} from "react"

// function EmployeeForm(props) {
  // const [newFirstName, setFirstName] = useState(" ");
  // const [newMiddleName, setMiddleName] = useState(" ");
  // const [newLastName, setLastName] = useState(" ");
  // const [newDateOfBirth, setDateOfBirth] = useState(" ");
  // const [newGender, setGender] = useState(" ");
  // const [newAge, setAge] = useState(" ");
  // const [newIdNumber, setIdNumber] = useState(" ");
  // const [newPosition, setPosition] = useState(" ");
  // const [newImage, setImage] = useState(" ");
  // const [newEmail, setEmail] = useState(" ");
  // const [newMobileNumber, setMobileNumber] = useState(" ");
  // const [newStreetAddress, setStreetAddress] = useState(" ");
  // const [newSuburb, setSuburb] = useState(" ");
  // const [newCity, setCity] = useState(" ");
  // const [newPostalCode, setPostalCode] = useState(" ");
  // const [newProvince, setProvince] = useState(" ");

  // const add = (() => {
  //   props.add()
  // })
  // return (
  //   <div className="Form">
  //     <h1>Employee Registration Form</h1>
  //     <br />
  //     <br />
  //     <br />

  //     <div className="registration-form>">
  //       <h3>Personal Information</h3>
  //       <hr />
  //       <hr />
  //       <br />

  //       <label for="name">Enter Your Full Name</label>
  //       <br />
  //       <input type="text" placeholder="First Name" required value={newFirstName} onChange={(e) => setFirstName(e.target.value)} />
  //       <input type="text" placeholder="Middle Name" value={newMiddleName} onChange={(e) => setMiddleName(e.target.value)} />
  //       <input type="text" placeholder="Last Name" required value={newLastName} onChange={(e) => setLastName(e.target.value)} />
  //       <br />
  //       <br />

  //       <label for="date of birth">Date of Birth</label>
  //       <br />
  //       <input type="date" required value={newDateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
  //       <br />
  //       <br />

  //       <label for="gender">Gender</label>
  //       <br />
  //       <input type="text" placeholder="Gender" required value={newGender} onChange={(e) => setGender(e.target.value)} />
  //       <br />
  //       <br />

  //       <label for="age">Your Age</label>
  //       <br />
  //       <input type="number" placeholder="Age" required value={newAge} onChange={(e) => setAge(e.target.value)} />
  //       <br />
  //       <br />

  //       <label for="ID">ID Number</label>
  //       <br />
  //       <input type="number" placeholder="ID" required value={newIdNumber} onChange={(e) => setIdNumber(e.target.value)} />
  //       <br />
  //       <br />

  //       <label for="position">Position</label>
  //       <br />
  //       <input type="text" placeholder="Position" required value={newPosition} onChange={(e) => setPosition(e.target.value)} />
  //       <br />
  //       <br />

  //       <label for="image">Image</label>
  //       <br />
  //       <input type="file" accept="image/*" required value={newImage} onChange={(e) => setImage(e.target.value)} />
  //       <br />
  //       <br />



  //       <h3>Contact Information</h3>
  //       <hr />
  //       <hr />
  //       <br />
  //       <label for="email">Enter Your Email</label>
  //       <br />
  //       <input type="email" placeholder="Email" required value={newEmail} onChange={(e) => setEmail(e.target.value)} />
  //       <br />
  //       <br />

  //       <label for="phone number">Mobile Number</label>
  //       <br />
  //       <input type="number" placeholder="Phone Number" required value={newMobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
  //       <br />
  //       <br />
  //       <br />



  //       <h3>Address</h3>
  //       <hr />
  //       <hr />
  //       <br />
  //       <input type="text" placeholder="Street Address" required value={newStreetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
  //       <br />
  //       <br />
  //       <input type="text" placeholder="Suburb" required value={newSuburb} onChange={(e) => setSuburb(e.target.value)} />
  //       <input type="text" placeholder="City" required value={newCity} onChange={(e) => setCity(e.target.value)} />
  //       <br />
  //       <br />
  //       <input type="number" placeholder="Postal Code" required value={newPostalCode} onChange={(e) => setPostalCode(e.target.value)} />
  //       <input type="text" placeholder="Province" required value={newProvince} onChange={(e) => setProvince(e.target.value)} />
  //       <br />
  //       <br />
  //       <br />
  //       <br />
  //       <button onClick={add}>SUBMIT</button>
  //     </div>
  //   </div>



//   const [transactionItems , setTransactionItems] = useState('');
//   const [amount, setAmount] = useState('')

//   const [transactionType, setTransactionType] = useState('')

//   const add = () => {
//     props.add(transactionItems, amount, transactionType);
//   }

//  return(
//   <div>
//     <h1>Add a new transaction</h1>
//     <input type="text" placeholder="Transaction" onChange={(event) => setTransactionItems(event.target.value)}/>
//     <br/><br/>
//     <input type="text" placeholder="Amount" onChange={(event) => setAmount(event.target.value)}/><br/><br/>
//     <select onChange={(event) => setTransactionType(event.target.value)}>
//       <option>Income</option>
//       <option>Expanse</option>
//     </select>
//     <br/><br/>
//     <button onClick={add}>Add</button>
//   </div>
//   );
// }
// export default EmployeeForm;
import React, { useState } from "react";

function EmployeeForm(props) {
  const [transactionItems, setTransactionItems] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const add = () => {
    props.add(transactionItems, amount, transactionType);
    setTransactionItems(''); // Clear the input after adding
    setAmount(''); // Clear the input after adding
    setTransactionType(''); // Clear the input after adding
  }

  return (
    <div>
      <h1>Add a new transaction</h1>
      <input 
        type="text" 
        placeholder="Transaction" 
        value={transactionItems} // Make it a controlled input
        onChange={(event) => setTransactionItems(event.target.value)}
      />
      <br /><br />
      <input 
        type="text" 
        placeholder="Amount" 
        value={amount} // Make it a controlled input
        onChange={(event) => setAmount(event.target.value)}
      />
      <br /><br />
      <select 
        value={transactionType} // Make it a controlled input
        onChange={(event) => setTransactionType(event.target.value)}
      >
        <option value="">Select Transaction Type</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <br /><br />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default EmployeeForm;
