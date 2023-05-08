import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../router/routes";

function Registration() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    qualification: "",
    joinDate: "",
    department: "",
    mobileNo: "",
  });

  function handleChange(e) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
    // navigate(routes.LoginPage);
  }

  const navigate = useNavigate();

  return (
    <div className="registration-page">
      <h3>Teacher Registration</h3>
      <form className="registration-box" onSubmit={handleSubmit}>
        <div className="left">
          <input
            type="text"
            name="name"
            value={details.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={details.email}
            placeholder="E-mail"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={details.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="mid">
          <input
            type="text"
            name="mobileNo"
            value={details.mobileNo}
            placeholder="Mobile no"
            onChange={handleChange}
          />
          <input
            type="text"
            name="qualification"
            value={details.qualification}
            placeholder="Qualification"
            onChange={handleChange}
          />
          <input
            type="text"
            name="department"
            value={details.department}
            placeholder="Department"
            onChange={handleChange}
          />
        </div>
        <div className="right">
          <input
            type="text"
            name="address"
            value={details.address}
            placeholder="Address"
            onChange={handleChange}
          />
          Joining Date :
          <input
            type="date"
            name="joinDate"
            value={details.joinDate}
            placeholder="Join Date"
            onChange={handleChange}
          />
          {/* <input
            type="password"
            name="confirm_password"
            value={details.password}
            placeholder="Confirm password"
            onChange={handleChange}
          /> */}
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
