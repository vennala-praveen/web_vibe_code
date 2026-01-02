import React, { useState } from "react";
import "./Login.css"

const Login = ({ switchToRegistration }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(loginData.email)) {
      setLoginError("Invalid email format");
      return;
    }
    if (!validatePassword(loginData.password)) {
      setLoginError("Password must be 8+ chars, include uppercase & number");
      return;
    }
    setLoginError("");
    console.log("Login Data:", loginData);
  };

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required 
        />
        {loginError && <p className="error">{loginError}</p>}
        <button type="submit">Login</button>

        <p>
          Don’t have an account?{" "}
          <span className="link" onClick={switchToRegistration}>
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
