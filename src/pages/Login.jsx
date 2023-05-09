import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../router/routes";
import axios from "axios";
import {baseUrl} from "../utils/constans.js"

function Login() {
  const navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  async function onSubmitHandler(e) {
    e.preventDefault();
    try {
      // console.log(credentials);
    const response = await axios.post(baseUrl + "/api/employee/login", credentials);
    localStorage.setItem("user", JSON.stringify(response.data));
    alert("Login Successful \nRedirecting to the home page ");
    if (response.data.roles === "Admin") {
      navigate(routes.AdminDashboard);
    } else {
      navigate(routes.TeacherDashboard);
    }
    } catch {
      alert("Invalid Credentails !!!");
    }
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
        <form className="login-form" onSubmit={onSubmitHandler}>
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
