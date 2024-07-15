import React, { useState } from "react";
import "../components/AddFunction.css";

function AddFunction(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState("");
  const [id, setId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  };

  const validateId = (id) => {
    const re = /^\d{2,5}$/;
    return re.test(id);
  }

  const add = () => {
    if (!firstName || !lastName || !email || !age || !gender || !phoneNumber || !position || !id) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (age < 18 || age > 60) {
      setErrorMessage("Age must be between 18 and 60");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Phone number must be 10 digits");
      return;
    }

    if (!validateId(id)) {
      setErrorMessage("Employee ID must be between 2 and 5 digits");
      return;
    }

    props.add(firstName, lastName, email, age, gender, phoneNumber, position, id);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setGender("");
    setPhoneNumber("");
    setPosition("");
    setId("");
    setErrorMessage("");
  };

  return (
    <div className="employee-form">
      <h1>Employee Registration Form</h1>
      <br />
      <h3>Employee Details</h3>
      <hr />
      <br />
      {errorMessage && <p className="error">{errorMessage}</p>}
      <label htmlFor="first-name">First Name</label>
      <input
        id="first-name"
        name="first-name"
        type="text"
        placeholder="First Name"
        required
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />

      <label htmlFor="last-name">Last Name</label>
      <input
        id="last-name"
        name="last-name"
        type="text"
        placeholder="Last Name"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        placeholder="Age"
        min="18"
        max="60"
        required
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />

      <label htmlFor="gender">Gender</label>
      <input
        id="gender"
        name="gender"
        type="text"
        placeholder="Gender"
        required
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <br />

      <label htmlFor="phone-number">Phone Number</label>
      <input
        id="phone-number"
        name="phone-number"
        type="tel"
        placeholder="Phone Number"
        required
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <br />

      <label htmlFor="position">Position</label>
      <input
        id="position"
        name="position"
        type="text"
        placeholder="Position"
        required
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
      <br />

      <label htmlFor="ID">Employee ID</label>
      <input
        id="ID"
        name="ID"
        type="number"
        placeholder="Identification Number"
        required
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <br />
      <br />
      <button className="btn" onClick={add}>
        Submit
      </button>
    </div>
  );
}

export default AddFunction;
