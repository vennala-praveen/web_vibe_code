import React, { useState } from "react";
import "./Regis.css";

const Registration = ({ switchToLogin }) => {

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: ""
  });

  const [registerError, setRegisterError] = useState("");
  
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const validateContact = (contact) => {
    const regex = /^[0-9]{10}$/; 
    return regex.test(contact);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(registerData.email)) {
      setRegisterError("Invalid email format");
      return;
    }
    if (!validateContact(registerData.contact)) {
      setRegisterError("Contact must be a 10-digit number");
      return;
    }
    if (!validatePassword(registerData.password)) {
      setRegisterError("Password must be 8+ chars, include uppercase & number");
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }
    setRegisterError("");
    console.log("Register Data:", registerData);
  };

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleRegisterSubmit}>
        <h2>Registration Form</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={registerData.username}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={registerData.contact}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleRegisterChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
          required
        />

        {registerError && <p className="error">{registerError}</p>}
        <button type="submit">Register</button>

        <p>
          Already have an account?{" "}
          <span className="link" onClick={switchToLogin}>
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Registration;