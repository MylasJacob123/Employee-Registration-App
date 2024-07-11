import React from "react";
import { useState } from "react";
import "../components/AddFunction.css"

function AddFunction(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);
  const [position, setPosition] = useState("");
  const [id, setId] = useState("");

  const add = () => {
    props.add(firstName, lastName, email, phoneNumber, image, position, id);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setImage(null);
    setPosition("");
    setId("");
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[1]);
  };

  return (
    <div className="employee-form">
      <h1>Employee Registration Form</h1>
      <br />

      <h3>Employee Details</h3>
      <hr />
      <br />

      <label for="first-name">First Name</label>
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

      <label for="last-name">Last Name</label>
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

      <label for="email">Email Address</label>
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

      <label for="phone-number">Phone Number</label>
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
      <br />

      <label for="image">Image</label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        required
        onChange={handleFileChange}
      />
      <br />

      <label for="position">Position</label>
      <br />
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
      <br />

      <label for="ID">ID Number</label>
      <br />
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
      <button onClick={add}>Add</button>
      
    </div>
  );
}
export default AddFunction;
