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
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  };

  const validateId = (id) => {
    const re = /^\d{5}$/;
    return re.test(id);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const add = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    if (!age) newErrors.age = "Age is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!position) newErrors.position = "Position is required";
    if (!id) newErrors.id = "Employee ID is required";
    if (!image) newErrors.image = "Employee image is required";

    if (email && !validateEmail(email))
      newErrors.email = "Invalid email format";
    if (age && (age < 18 || age > 60))
      newErrors.age = "Age must be between 18 and 60";
    if (phoneNumber && !validatePhoneNumber(phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10 digits";
    if (id && !validateId(id)) newErrors.id = "Employee ID must be 5 digits";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    window.alert("The form has been submitted successfully!");

    props.add(
      firstName,
      lastName,
      email,
      age,
      gender,
      phoneNumber,
      position,
      id,
      image
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setGender("");
    setPhoneNumber("");
    setPosition("");
    setId("");
    setErrors({});
    setImage("");
  };


  return (
    <div className="employee-form">
      <h1>Employee Registration Form</h1>
      <br />
      <h3>Employee Details</h3>
      <hr />
      <br />
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
      {errors.firstName && <p className="error">{errors.firstName}</p>}
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
      {errors.lastName && <p className="error">{errors.lastName}</p>}
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
      {errors.email && <p className="error">{errors.email}</p>}
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
      {errors.age && <p className="error">{errors.age}</p>}
      <br />

      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        name="gender"
        type="text"
        placeholder="Gender"
        required
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value=""></option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      {errors.gender && <p className="error">{errors.gender}</p>}
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
      {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
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
      {errors.position && <p className="error">{errors.position}</p>}
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
      {errors.id && <p className="error">{errors.id}</p>}
      <br />

      <label htmlFor="image">Employee Image</label>
      <input
        id="image"
        name="image"
        type="text"
        placeholder="Image URL"
        required
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      {errors.image && <p className="error">{errors.image}</p>}
      <br />

      <label htmlFor="image-upload">Or Upload Employee Image</label>
      <input
        id="image-upload"
        name="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {errors.image && <p className="error">{errors.image}</p>}
      <br />
      
      <button className="btn" onClick={add}>
        Submit
      </button>
    </div>
  );
}

export default AddFunction;
