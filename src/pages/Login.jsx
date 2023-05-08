import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../router/routes";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(credentials);
  }

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="login-page">
      <div className="form-box">
        <h3>Teachers Login</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            name="email"
            value={credentials.passwrod}
            type="text"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            name="password"
            value={credentials.passwrod}
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <Link to={routes.Registration}> Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
