import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    dob: "",
    address: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(user);
  };

  return (
    <div className="form-section">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Enter Address"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="user-card">
          <h3>Submitted Details</h3>

          <p><strong>Name:</strong> {submitted.name}</p>

          <p><strong>Age:</strong> {submitted.age}</p>

          <p><strong>DOB:</strong> {submitted.dob}</p>

          <p><strong>Address:</strong> {submitted.address}</p>

          <p><strong>Phone:</strong> {submitted.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Form;