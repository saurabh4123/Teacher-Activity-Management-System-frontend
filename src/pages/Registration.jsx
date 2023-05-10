import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../router/routes";
import { baseUrl } from "../utils/constans";
import axios from "axios";

const axiosInstance = axios.create();

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
    roles:"Teacher"
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
    for (const property in details) {
        if (details[property] === "") {
          alert(`Please fill in ${property}`);
          return;
        }
    }
    

    await axiosInstance.post(baseUrl+'/api/employee/create-employee', details)
    .then(response => {
      // console.log(response);
      alert('Employee added successfully!!')
      navigate(routes.LoginPage);
    })
    .catch(error => {
      console.log(error);
      alert('Email already in use..')
    });
  }

  

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
            minLength={10}
            maxLength={10}
            pattern="[1-9]{1}[0-9]{9}"
            title="mobile no can only be between 0 to 9"
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
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
