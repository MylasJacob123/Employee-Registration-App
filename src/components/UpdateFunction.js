import React, { useState, useEffect } from "react";
import "../components/UpdateFunction.css"

function UpdateFunction({ employee, onUpdate }) {
  const [editData, setEditData] = useState({});

  useEffect(() => {
    setEditData(employee);
  }, [employee]);

  const handleUpdate = () => {
    onUpdate(editData);
  };

  const handleCancel = () => {
    setEditData({});
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="edit-form">
      <h2>Edit Employee</h2>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={editData.firstName || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={editData.lastName || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={editData.email || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={editData.phoneNumber || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          name="position"
          value={editData.position || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        ID Number:
        <input
          type="text"
          name="id"
          value={editData.id || ""}
          onChange={handleInputChange}
        />
      </label>
      <button className="button" onClick={handleUpdate}>Update</button>
      <button className="button" onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default UpdateFunction;
